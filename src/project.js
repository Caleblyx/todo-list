
const project = function(newName) {
    let project = Object.create(projectPrototype);
    project.todos = [];
    project.name = newName;


    return project;
}


const projectPrototype = {
    addTodo(todo) {
        this.todos.push(todo);
    },
    deleteTodo(todo) {
        let index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
        console.log(this.todos);
    },
    getTodos() {
        return this.todos;
    },
    getName() {
        return this.name;
    },
    setName(newName) {
        this.name = newName;
    }

}

export {project};