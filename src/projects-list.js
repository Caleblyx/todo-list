const projectsListPrototype = {
    getProjects() {
        return this.projects;
    },
    addProject(project){
        this.projects.push(project);
    },
    deleteProject(project){
        let index =this.projects.indexOf(project);
        this.projects.splice(index, 1);
    },
    setProjectsList(list) {
        this.projects = list;
    }
}


const projectsList = function(){
    const projectsList = Object.create(projectsListPrototype);
    projectsList.projects = [];
    return projectsList;
}();


export {projectsList};