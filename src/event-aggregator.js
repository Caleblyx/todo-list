import {Event} from './event.js';

const eventAggregator = (function () {
    const events = [];
    function getEvent(name) {
        let event = events.find(e => e.name == name);
        return event;
    }

    const publish = function(eventName, eventArgs) {
        let event = getEvent(eventName);
        console.log("publishing: " + eventName + " with " + eventArgs);
        if (!event) {
            event = new Event(eventName);
            events.push(event);
        }
        event.invokeHandlers(eventArgs);
    }

    const subscribe = function(eventName, handler) {
        let event = getEvent(eventName);
        console.log("subscribing: " + eventName + " with " + handler);
        if (!event) {
            event = new Event(eventName);
            events.push(event);
        }
        event.addHandler(handler);
    }

    return {
        publish,
        subscribe
    }
})();

export {eventAggregator};