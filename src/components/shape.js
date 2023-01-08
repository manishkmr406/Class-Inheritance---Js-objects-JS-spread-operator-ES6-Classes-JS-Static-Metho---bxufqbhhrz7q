// declare class
class Shape{
    constructor(color){
        if(color){
            this.color=color;
        }
        else{
            this.color='red';
        }
    }
    drawShape(){

    }
    calculateArea(){

    }
}
// export class using module.exports
module.exports=Shape;