import { addCopyRight, generateID, getRandomColor } from "@sarawebs/sb-utils";
import createProject from './components/project.js'

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
    this.colorize();
    this.projectsList = document.getElementById('main-grid');

  }
  colorize(){
    document.documentElement.style.setProperty(
      "--sb-theme-color",
      getRandomColor()
    );
  }
  renderProjects(projects) {
    projects.forEach((project) => {
      const projectView = createProject(project);
      
      this.projectsList.appendChild(projectView);
    })
  }
}
