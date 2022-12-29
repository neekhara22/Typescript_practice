import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";


let myCircle = new Circle(5,10,20);

let myRectangle = new Rectangle(0,0,3,7);


//declare an array of shapes .......initially empty
let theShape: Shape[]=[];


//add the shapes to the array
theShape.push(myCircle);
theShape.push(myRectangle);

for(let tempShape of theShape){
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    
}


