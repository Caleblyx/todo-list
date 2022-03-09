function Event(name) {
    this.handlers = []
    this.name = name
}

Event.prototype.addHandler = function (handler){
    this.handlers.push(handler);
}

Event.prototype.invokeHandlers = function (args) {
    this.handlers.forEach(handler => handler(args));
}


export {Event};