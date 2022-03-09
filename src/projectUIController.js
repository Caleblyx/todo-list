import "./styles.css";
import { eventAggregator } from "./event-aggregator";
import {project} from "./project.js";
import tickIcon from "./images/tick-icon.png";
import deleteIcon from "./images/delete-icon.png"
import addIcon from "./images/plus.png";
const projectUIController = (function() {
    const previousName = "Default";
    const projectName = document.querySelector("#project-name");
    const toDoList = document.querySelector("#todo-list");
    const form = document.querySelector("#add-todo-form");
    const addButton = document.querySelector("#add-todo-button");
    const cancelButton = document.querySelector("#cancel-button");
    const deleteProjectButton = document.querySelector('#delete-project-button');
    const openForm = function() {
        addButton.style.display = "none";
        form.style.display = "flex";
    }

    const createTodo = function(e) {
        e.preventDefault();
        addButton.style.display = "flex";
        const formData = new FormData(this);
        const toDoArgs = {"title" : formData.get("title"), "desc": formData.get("description"), "dueDate": formData.get("due-date"), "priority" : formData.get("priority")};
        eventAggregator.publish("create-todo", toDoArgs);
        form.reset();
        form.style.display = "none";
    }

    const closeForm = function() {
        addButton.style.display="flex";
        form.style.display = "none";

    }

    const showDefault = function() {
        resetProjectView();
        projectName.classList.remove("project-name-editable");
        projectName.textContent = "Select or create a new project to view or create new tasks.";
        projectName.contentEditable = false;
        deleteProjectButton.style.display = "none";
        addButton.style.display = "none";
    }

    const editProjectName = function(e) {
        this.textContent = this.textContent.trim();
        if (this.textContent == "") {
            alert("Project name cannot be empty");
            this.textContent = previousName;
        } else if (this.textContent != previousName){
            eventAggregator.publish("edit-project-name", this.textContent);
        }
    }
    const resetProjectView = function() {
        projectName.innerHTML = "";
        toDoList.innerHTML= "";
    }
    
    const addToDoToView = function(todo) {
        const todoDiv = todoView(todo);
        toDoList.appendChild(todoDiv);

    }

    const saveProjectName = function(e){
        previousName = this.textContent;
    } 

    const showProject = function(project) {
        resetProjectView();
        projectName.classList.add("project-name-editable");
        projectName.contentEditable = true;
        deleteProjectButton.style.display = "block";
        addButton.style.display = "block";
        projectName.textContent = project.getName();
        projectName.addEventListener("onfocus", saveProjectName);
        projectName.addEventListener("focusout", editProjectName);
        for (let todo of project.getTodos()) {
            addToDoToView(todo);
        }
    }

    const deleteProject = function(e) {
        if (confirm("Are you sure you want to delete this project?")) {
            eventAggregator.publish("delete-project", {});
            showDefault();
        }
    } 


    const addImage = document.querySelector(".add-image");
    addImage.src = addIcon;

    addButton.addEventListener("click", openForm);
    form.addEventListener("submit", createTodo);

    cancelButton.addEventListener("click", closeForm);

    
    deleteProjectButton.addEventListener("click", deleteProject);

    eventAggregator.subscribe("show-project", showProject);
    eventAggregator.subscribe("add-todo", addToDoToView);



    showDefault();

    return {
        addToDoToView,
        showProject
    }
})();


const todoView = function (todo) {

    function selectTodo(e) {
        console.log("Executing select to-do");
        eventAggregator.publish("select-todo", todo);
    } 

    function editTitle(e) {
        this.textContent = this.textContent.trim()
        if (this.textContent == "") {
            alert("To do title cannot be empty");
            this.textContent = todo.getTitle();
        } else if (this.textContent != todo.getTitle()){
            eventAggregator.publish("edit-title", this.textContent);
        } 
    }

    function editDesc(e) {
        if (this.textContent != todo.getDesc()) {
            eventAggregator.publish("edit-description", this.textContent);
        }
    }

    function editDueDate(e) {
        if (this.value != todo.getDueDate()) {
            eventAggregator.publish("edit-due-date", this.value);
        }
    }

    function editPriority(e){
        if (this.value != todo.getPriority()) {
            eventAggregator.publish("edit-priority", this.value);
        }
    }

    function toggleDone(e) {
        console.log("Executing toggle done");
        if (this.classList.contains("tick-image-checked")) {
            this.classList.remove("tick-image-checked");
        } else {
            this.classList.add("tick-image-checked");
        }
        eventAggregator.publish("toggle-done", {});
    }

    function deleteTodo(e) {
        eventAggregator.publish("delete-todo", todo);
        todoDiv.remove();
    }



    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    todoDiv.addEventListener("click", selectTodo, {capture: true});


    const details = document.createElement("div");
    details.classList.add("todo-details");
    todoDiv.appendChild(details);

    const title = document.createElement("div");
    title.contentEditable = true;
    title.textContent = todo.getTitle();
    title.classList.add("todo-title");
    title.addEventListener("focusout", editTitle);

    const desc = document.createElement("div");
    desc.textContent = todo.getDesc();
    desc.contentEditable = "true";
    desc.addEventListener("focusout", editDesc);

    const dueDate = document.createElement("input");
    dueDate.type = "date";
    dueDate.value = todo.getDueDate();
    dueDate.addEventListener("input", editDueDate);

    const priority = document.createElement("select");
    const options = ['low', 'medium', 'high'];

    for (let opt of options) {
        let option = document.createElement("option");
        option.value = opt;
        option.textContent = opt;
        priority.appendChild(option);
    } 

    priority.value = todo.getPriority();
    priority.addEventListener("input", editPriority);

    const selectors = document.createElement("div");
    selectors.classList.add("todo-selectors");
    selectors.appendChild(dueDate);
    selectors.appendChild(priority);


    const tick = new Image();
    tick.src = tickIcon;
    tick.classList.add("tick-image");
    if (todo.getDone()){
        tick.classList.add("tick-image-checked");
    }

    tick.addEventListener("click", toggleDone);

    const blackCircle = document.createElement("div");
    blackCircle.classList.add("dot");
    blackCircle.appendChild(tick);
    
    const deleteButton = new Image();
    deleteButton.src = deleteIcon;
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", deleteTodo);

    const buttons = document.createElement("div");
    buttons.classList.add("buttons");
    buttons.appendChild(deleteButton);
    buttons.appendChild(blackCircle);
        

    details.appendChild(title);
    details.appendChild(desc);
    details.appendChild(selectors);

    todoDiv.appendChild(buttons);

    return todoDiv;
}

export {projectUIController};