import "./styles.css";
import tickIcon from "./images/tick-icon.png"

import {todo} from "./todo.js"
import {project} from "./project.js"
import { projectUIController } from "./projectUIController";
import { projectController } from "./project-controller";
import { todoController } from "./todo-controller";
import { projectsListController } from "./project-list-controller";
import { projectsListsUIController } from "./projectsListUIController";
import { storage } from "./storage";

const head = document.querySelector("head");
const icon = document.createElement("link");
icon.rel = "icon";
icon.type = "image/x-icon";
icon.href = tickIcon;
head.appendChild(icon);


storage.loadProjects();