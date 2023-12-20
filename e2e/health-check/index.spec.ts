import { prodAccountsByEmail } from "@data/accounts";
import { expect, test } from "@fixtures/fixture";
import { ProjectPage } from "@pages/project/project-page";


test.use({
  environment: "production", authentication: {
    email: prodAccountsByEmail["nguyen.thi.ngoc+p1@moneyforward.vn"].email,
    officeName: "PJC_MFV_developer"
  }
});

test("Can login and see project page", async ({ page }) => {
  const projectPage = new ProjectPage(page);
  await projectPage.goto();

  await projectPage.waitUntilProjectsLoaded()

  await expect(projectPage.title).toHaveText("プロジェクト");
});