# pjc_frontend_playwright

## How to add authentication for test

Authentication in PJC is done by JWT token. Which will be changed if you switch office.
So, everytime you switch office, the old JWT token will be expired and you can't use the old token.

=> You need three things to authenticate:
- Email
- Password
- Office Name

1. Add account to ./data/accounts.ts if not exists
2. In the top of test file, add the code like this.
    ```typescript
    test.use({authentication: {
      email: accountsByEmail["vu.xuan.khiem+6@moneyforward.vn"].email,
      officeName: 'W data PdM 20'
    }})
    ```
    
    Don't worry, the email is auto filled by the IDE so you don't need to type them all


3. Start write the test like normal. It will automatically login for you.

    Even when in different worker, it will still re-use the same token so one account&office will login one time only.