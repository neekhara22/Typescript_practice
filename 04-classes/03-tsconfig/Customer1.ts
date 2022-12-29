class Customer1{
    private _firstName:string;
    private _lastName: string;


    constructor(theFirst:string,theLast:string){
            this._firstName=theFirst;
            this._lastName=theLast;
    }

    public get firstName():string{
        return this._firstName;
    }

    public set firstName(value:string){
      this._firstName=value;
    }

    public get lastName(): string {
      return this._lastName;
    }
    public set lastName(value: string) {
      this._lastName = value;
    }
}

//let's create an instance
let myCustomer1 = new Customer1("Akash","Neekhara");

// myCustomer.firstName="Akash";
// myCustomer.lastName="Neekhara";

console.log(myCustomer1.firstName);
console.log(myCustomer1.lastName);