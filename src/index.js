import "./styles.css";

import {todo} from "./todo.js"
import {project} from "./project.js"
import { projectUIController } from "./projectUIController";
import { projectController } from "./project-controller";
import { todoController } from "./todo-controller";
import { projectsListController } from "./project-list-controller";
import { projectsListsUIController } from "./projectsListUIController";
import { storage } from "./storage";

storage.loadProjects();