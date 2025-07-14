import { Model } from "./model";
import { View } from "./view";

export class Controller {
  constructor(appName) {
    this.model = new Model();
    this.view = new View(appName);

    this.view.renderProjects(this.model.projects);
  }
}
