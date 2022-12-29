var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
//let's create an instance
var myCustomer = new Customer("Akash", "Neekhara");
myCustomer.firstName = "Akash";
myCustomer.lastName = "Neekhara";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
