import projectURIs, { jsonData } from "./projects-data.js";
import { LinkPreviewFetcher, generateID } from "@sarawebs/sb-utils";

export class Model {
  #projects = [];
  constructor() {
    this.projectsURIs = projectURIs();
    this.apiKey = "711c2bd5a840a0008b5fc0618a08dcb6";
    this.projects;
    // this.init();
    this.initJson();
  }
  initJson() {
    const data = jsonData;
    data.forEach((p) => this.#projects.push(p));
  }
  init() {
    this.projectsURIs.forEach((uri) => {
      const fetcher = new LinkPreviewFetcher(this.apiKey);
      fetcher
        .fetchPreview(uri)
        .then((data) => {
          data.id = generateID("project");
          this.#projects.push(data);
        })
        .catch((error) => {
          console.error("Error fetching preview:", error);
        });
    });
  }
  get projects() {
    return this.#projects;
  }
}
