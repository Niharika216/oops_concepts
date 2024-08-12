class Shape {
    constructor(color) {
      console.log("Inside Shape Constructor");
      this.color = color;
    }
    draw = () => {
      console.log("Drawing a shape with color");
    };
  }
  
  export default Shape;
  