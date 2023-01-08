// import using require
const Shape=require('./shape');

// declare class
class Circle extends Shape{
    calculateArea(radius){
        return Math.PI*Math.pow(radius,2);
    }
}
// export class using module.exports
module.exports=Circle;
