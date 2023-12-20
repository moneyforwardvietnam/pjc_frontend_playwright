import { interceptRequest } from "@apis/intercept-request/interceptRequest";
import { PageCommon } from "@pages/page-common";

export class ProjectPage extends PageCommon {

  get title() {
    return this.page.getByRole('heading', { name: 'プロジェクト' })
  }

  goto() {
    return this.page.goto('/')
  }

  waitUntilProjectsLoaded() {
    return this.page.waitForResponse('**/api/v1/project_master/projects')
  }
}