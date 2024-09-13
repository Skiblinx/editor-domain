// Define an Event Emitter class
class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  // Method to add event listeners
  on(event, listener) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }

  // Method to emit events
  emit(event, ...args) {
    const eventListeners = this.listeners[event];
    if (eventListeners) {
      eventListeners.forEach(listener => {
        listener(...args);
      });
    }
  }
}

// Create an instance of the EventEmitter
const emitter = new EventEmitter();

// Add event listeners
emitter.on('greet', name => {
  // console.log(`Hello, ${name}!`);
});

emitter.on('greet', name => {
  // console.log(`Welcome, ${name}!`);
});

// Emit events
emitter.emit('greet', 'John');