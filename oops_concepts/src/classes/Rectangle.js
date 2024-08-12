import Shape from "./Shape";

class Rectangle extends Shape{
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
      }
    
      draw = () => {
        console.log(
          `Drawing a rectangle with width ${this.width}, height ${this.height}, and color ${this.color}`
        );
      };
}

export default Rectangle;