import { eventAggregator } from "./event-aggregator";

const projectsListsUIController = function() {
    const list = document.querySelector("#projects-list");
    const addProjectButton = document.querySelector("#add-project-button");
    const form = document.querySelector("#add-project-form");
    const cancelButton = document.querySelector("#project-cancel-button");

    const displayProjects = function (projectsList) {
        for (let project of projectsList) {
            list.appendChild(projectView(project).projectDiv);
        }
    } 

    const editSelectedProjectName = function (name) {
        let selected = document.querySelector(".selected-project");
        selected.textContent = name;
    }

    const deleteSelectedProject = function(args) {
        let selected = document.querySelector(".selected-project");
        selected.remove();
    }

    const showAddProjectForm = function(e) {
        addProjectButton.style.display = "none";
        form.style.display = "flex";
    }

    const createProject = function(e){
        e.preventDefault();
        addProjectButton.style.display = 'block';
        const formData = new FormData(this);
        const projectArgs = {"name" : formData.get("project-name")};
        eventAggregator.publish("create-project", projectArgs);
        form.reset();
        form.style.display = "none";
    }

    const addProject = function(project) {
        const projectUI = projectView(project);
        list.appendChild(projectUI.projectDiv);
        projectUI.selectProject();
    }

    const closeAddProjectForm = function (e){
        addProjectButton.style.display = "block";
        form.style.display = "none";
    }

    cancelButton.addEventListener("click", closeAddProjectForm);
    addProjectButton.addEventListener("click", showAddProjectForm);
    form.addEventListener("submit", createProject);
    eventAggregator.subscribe("add-project", addProject);
    eventAggregator.subscribe("display-projects-list", displayProjects);
    eventAggregator.subscribe("edit-project-name", editSelectedProjectName);
    eventAggregator.subscribe("delete-project", deleteSelectedProject);
}();

const projectView = function(project) {

    const selectProject = function(e) {
        let selected = document.querySelector(".selected-project");
        if (selected){
            selected.classList.remove("selected-project");
        }
        projectDiv.classList.add("selected-project");
        eventAggregator.publish("select-project", project);
    }

    const projectDiv= document.createElement("div");
    projectDiv.classList.add("projects-list-item");
    projectDiv.textContent = project.getName();

    projectDiv.addEventListener("click", selectProject);
    
    return {projectDiv,
            selectProject};
}

export {projectsListsUIController};