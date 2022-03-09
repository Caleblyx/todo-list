
import {project} from "./project.js"
import { eventAggregator } from "./event-aggregator";

const projectController = function() {
       
    let selectedProject = null;

    const createProject = function(args) {
        eventAggregator.publish("add-project", project(args.name));
    }

    const setProject = function(project) {
        if (selectedProject != project) {
            selectedProject = project;
            eventAggregator.publish("show-project", selectedProject);
        }
    }

    const addTodo = function(todo) {
        selectedProject.addTodo(todo);
        eventAggregator.publish("save", {});
    }

    const deleteTodo = function(todo) {
        selectedProject.deleteTodo(todo);
        eventAggregator.publish("save", {});
    }

    const setName = function(name) {
        console.log(selectedProject);
        selectedProject.setName(name);
        eventAggregator.publish("save", {});
    }

    const deleteProject = function(args) {
        eventAggregator.publish("delete-project-from-list", selectedProject);
        selectedProject = null;
    }

    eventAggregator.subscribe("add-todo", addTodo);
    eventAggregator.subscribe("delete-todo", deleteTodo);
    eventAggregator.subscribe("create-project", createProject);
    eventAggregator.subscribe("select-project", setProject);
    eventAggregator.subscribe("edit-project-name", setName);
    eventAggregator.subscribe("delete-project", deleteProject);
    return {
        setProject
    }
}()

export {projectController} 