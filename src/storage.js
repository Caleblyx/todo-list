import { projectsListController } from "./project-list-controller"
import { project } from "./project";
import { todo } from "./todo";
import { eventAggregator } from "./event-aggregator";

const storage = function() {
    const saveProjects = function(args) {
        localStorage.setItem("projects", JSON.stringify(projectsListController.getProjects()));
    }

    const loadProjects = function() {
        let loadedProjects = localStorage.getItem("projects");
        loadedProjects = JSON.parse(loadedProjects);
        const projects = []
        loadedProjects.forEach(projectArgs => projects.push(loadProject(projectArgs)));
        projectsListController.setProjectsList(projects);
    }

    const loadProject = function(projectArgs){
        const newProject = project(projectArgs.name);
        projectArgs.todos.forEach(todoArgs => newProject.addTodo(loadTodo(todoArgs)));
        return newProject
    }

    const loadTodo = function(todoArgs) {
        const newTodo = todo(todoArgs.title, todoArgs.desc, todoArgs.dueDate, todoArgs.priority, todoArgs.done);
        return newTodo
    }
    eventAggregator.subscribe("save", saveProjects);

    return {loadProjects};
}();

export {storage};