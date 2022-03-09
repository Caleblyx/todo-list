import {todo} from "./todo.js"
import { eventAggregator } from "./event-aggregator.js";
const todoController = function() {
    
    let selectedTodo = null;

    const setTodo = function(todo) {
        selectedTodo = todo;
    }
    const createTodo = function (args) {
        eventAggregator.publish("add-todo", todo(args.title, args.desc, args.dueDate, args.priority));
    }

    const editTitle = function (newTitle) {
        selectedTodo.setTitle(newTitle);
        eventAggregator.publish("save", {});
    }

    const editDesc = function (newDesc) {
        selectedTodo.setDesc(newDesc);
        eventAggregator.publish("save", {});
    }

    const editDueDate = function (newDueDate) {
        selectedTodo.setDueDate(newDueDate);
        eventAggregator.publish("save", {});
    }

    const editPriority = function (newPriority) {
        selectedTodo.setPriority(newPriority);
        eventAggregator.publish("save", {});
    }

    const toggleDone = function (args) {
        selectedTodo.toggleDone();
        eventAggregator.publish("save", {});
    }

    const deleteTodo = function (args) {
        selectedTodo = null;
        eventAggregator.publish("save", {});
    }

    eventAggregator.subscribe("create-todo", createTodo);
    eventAggregator.subscribe("select-todo", setTodo);
    eventAggregator.subscribe("edit-title", editTitle);
    eventAggregator.subscribe("edit-description", editDesc);
    eventAggregator.subscribe("edit-due-date", editDueDate);
    eventAggregator.subscribe("edit-priority", editPriority);
    eventAggregator.subscribe("toggle-done", toggleDone);
    eventAggregator.subscribe("delete-todo", deleteTodo);
}();

export {todoController};