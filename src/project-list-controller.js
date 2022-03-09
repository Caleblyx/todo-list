import { eventAggregator } from "./event-aggregator";
import { projectsList } from "./projects-list";
const projectsListController = function() {
    const list = projectsList;

    const addProject = function(project) {
        list.addProject(project);
        eventAggregator.publish("save", {});
    }

    const deleteProject = function(project) {
        list.deleteProject(project);
        console.log(list.getProjects());
        eventAggregator.publish("save", {});
    }

    const setProjectsList = function(projectsList) {
        list.setProjectsList(projectsList);
        eventAggregator.publish("display-projects-list", list.getProjects());
    }

    const getProjects = function () {
        return list.getProjects();
    }

    eventAggregator.subscribe("add-project", addProject);
    eventAggregator.subscribe("delete-project-from-list", deleteProject);

    return {setProjectsList, getProjects};
}();

export{projectsListController};