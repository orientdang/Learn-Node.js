const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('my_event', () => {
    console.log('my_event has occured');
});

// With class
class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }
    get name() {
        return this._name;
    }
}

let dangNguyen = new Person('Nguyen Hai Dang');
dangNguyen.on('name', (...name) => {
    console.log(name);
})

dangNguyen.emit('name', dangNguyen.name,dangNguyen.name);

