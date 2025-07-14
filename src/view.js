import { addCopyRight } from "@sarawebs/sb-utils";

export class View {
  constructor(appName) {
    addCopyRight(appName);
    document.querySelector("title").textContent = appName;
    this.projectColors = [
      "#7c75ca",
      "#d88f39",
      "#5e8f4d",
      "#ca7599",
      "#4692d9",
    ];
  }
}
