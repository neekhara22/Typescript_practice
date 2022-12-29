class Customer{
    firstName:string;
    lastName:string;

    constructor(theFirst:string,theLast:string){
            this.firstName=theFirst;
            this.lastName=theLast;
    }
}

//let's create an instance
let myCustomer = new Customer("Akash","Neekhara");

// myCustomer.firstName="Akash";
// myCustomer.lastName="Neekhara";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);