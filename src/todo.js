const todo = function (newTitle, newDesc = "No Description", newDueDate = "None", newPriority = "None", done = false) {

    let todo = Object.create(todoPrototype);
    todo.title = newTitle;
    todo.desc = newDesc;
    todo.dueDate = newDueDate;
    todo.priority = newPriority;
    todo.done = done;
    return todo;
} 

const todoPrototype = {

    getTitle() {
        return this.title;
    },
    setTitle(newTitle) {
        this.title = newTitle;
    },

    getDesc() {
        return this.desc;
    },

    setDesc(newDesc) {
        this.desc = newDesc;
    },

    getDueDate() {
        return this.dueDate;
    },

    setDueDate(newDueDate) {
        this.dueDate = newDueDate;
    },

    getPriority(){
        return this.priority;
    },
    
    setPriority(newPriority) {
        this.priority = newPriority;
    },

    getDone(){
        return this.done;
    },
    
    toggleDone(){
        this.done = !this.done;
    }

}

export {todo};