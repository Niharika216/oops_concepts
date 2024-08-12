import Shape from "./Shape";

class Square extends Shape{
    constructor(color, side) {
        super(color);
        this.side=side;
      }
    
      draw = () => {
        console.log(
          `Drawing a Square with side ${this.side}, and color ${this.color}`
        );
      };
}

export default Square;