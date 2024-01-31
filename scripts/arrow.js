const o = {
    msg: 'An object',
    person: {
        firstName: 'Grace',
        lastName: 'Hopper',
        age: 89,
        fullName: () => { return this.firstName + ' ' + this.lastName } // arrow function: this = surrending scopre == window scope 
    }
}

let x = o.person.fullName(); // undefined because fullname is an arrow function so it refers to surrending scopre
// which is the window scopre 
console.log(x);