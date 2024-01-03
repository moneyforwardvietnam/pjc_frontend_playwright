# PJC E2E Authentication

## E2E Normal login flow

As all services in MoneyForward, we need to login via SSO in Navis site by using email and password.

After login, we will have the JWT token; this token is build by the **current office user information**, which is based
on the current office;

(I haven't test the case that current user doesn't have any office)

So, the full flow of normal authentication is:
- Go to PJC site then click login
- We will be redirected to Navis site, then login with email and password
- After login, we will be redirected back to PJC site with the JWT token (with the last used office)
- Then, we need to go to PJC /office/switch to switch office to the desired one
- We will select the desired office, then we will be redirected back to PJC site with the actual JWT token
- We will save all the cookies (including the JWT token) to the file `.auth/**.json` for later use

## Requirements

We have many test cases, which is listed here: https://moneyforward.tmxtestrail.com/index.php?/plans/view/213

For each test case, we will have the Precondition including:
- Environment: Beta, Staging or Production
- Office: The office that we will use for testing
- Email & Password to login

=> We will have many different tokens for many test case;
It must be reuse-able if some test case has the same Precondition
It must be reuse-able for many workers (Playwright support running test in Parallels)

## How should we implement?

My expectation for the automatically in each test like this:

```typescript
test.use({authentication: {email: '...', officeName: '...'}, environment: '...'})

test('C123 Test Title', async ({page}) => {
  // Implement the test here
})
```

This is the most easy way to use to improve DX;

## How we implemented it?

This is the documentation of Playwright to implement the authentication that support caching login data for multiple workers:
https://playwright.dev/docs/auth#moderate-one-account-per-parallel-worker

But it doesn't match with our requirement because:
- It will cache only one account per worker, that means it doesn't support multiple accounts
- It will login again for each worker, which is not good for performance and maybe Navis will block it because we login too many times
- Looks like we can't use `storageState` fixture because it is run BEFORE the `authentication` fixture

How did we solve it?
- We will use the `context` fixture instead of `storageState` fixture; because it will run after the `authentication` fixture
- We will cache the account by `email & officeName`, but email and officeName is not fit for the file name, so we will use md5 hash of it: `md5(email + officeName)`; So the file name will be `.auth/${md5(email + office)}.json`
- We will use get baseURL based on the environment

Let's implement it; You can looks at `src/fixtures/fixture.ts` for more detail

```typescript
context: async ({authentication, environment, browser}, use, testInfo) => {
    const baseURL = baseUrls[environment]

    if (!authentication) return use(await browser.newContext({baseURL}));

    const md5 = require('crypto').createHash('md5').update(authentication.email + authentication.officeName).digest('hex')
    const fileName = path.resolve(`src/.auth/user-${md5}.json`)
  
    const fileExists = fs.existsSync(fileName)
    if (fileExists) {
      const context = await browser.newContext({storageState: fileName, baseURL})
      return use(context)
    }

    const page = await browser.newPage({ locale: 'ja', storageState: undefined, baseURL })
    
    // Login flow here
  
    const context = page.context()
    await context.storageState({ path: fileName })
    await page.close()

    const browserContext = await browser.newContext({storageState: fileName, baseURL})
    return use(browserContext)
  }
```

## How to reuse same authentication cache across workers?

The most easy way to implement it is we will use singleton for login flow;
That's mean if there're any worker is logging in with the current account, other workers will wait for it to finish then reuse the cache;

But it won't work across workers, because each worker run in different threads; which mean it doesn't share the variables;

We have to workaround it, by using the file system to share the cache between workers;

Login flow will re-strucuture like this:

- Check if the cache file exists
- If it exists, we will use it
- If not, we will check a temp file
- If it exists, we will wait for it to finish
- If not, we will create a temp file and start login flow
- After login flow, we will rename the temp file to the cache file

You can check the ./src/fixtures/fixture.ts for more detail. With the function `waitUntilFileExists` and how we create and delete .tmp file