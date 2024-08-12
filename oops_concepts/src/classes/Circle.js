import Shape from "./Shape";

class Circle extends Shape{
    constructor(color, radius) {
        super(color);
        this.radius = radius;
      }
    
      draw = () => {
        console.log(
          `Drawing a Circle with radius ${this.radius}, and color ${this.color}`
        );
      };
}

export default Circle;