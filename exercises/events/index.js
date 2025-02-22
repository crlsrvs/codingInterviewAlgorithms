// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor(){
    this.events = {
      'click': [],
      'hoover': [],
    };
  }
  // Register an event handler
  on(eventName, callback) {
    if (this.events[eventName] === undefined) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback)
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    this.events[eventName].forEach(eventAction => {
      eventAction();
    });
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    this.events[eventName] = [];
  }
}

module.exports = Events;
