import { addCopyRight } from "@sarawebs/sb-utils";

export class View {
  constructor(appName) {
    addCopyRight(appName);
    document.querySelector("title").textContent = appName;
    document.getElementById("logo-name").textContent = appName;
  }
}
