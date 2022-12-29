"use strict";
class Customer1 {
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
//let's create an instance
let myCustomer1 = new Customer1("Akash", "Neekhara");
// myCustomer.firstName="Akash";
// myCustomer.lastName="Neekhara";
console.log(myCustomer1.firstName);
console.log(myCustomer1.lastName);
