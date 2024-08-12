import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Shape from "./classes/Shape";
import Rectangle from "./classes/Rectangle";
import Square from "./classes/Square";
import Circle from "./classes/Circle";

function App() {
  let shape = new Shape();
  let [rectangleInfo, setRectangleInfo] = useState("");
  let [squareInfo, setSquareInfo] = useState("");
  let [circleInfo, setCircleInfo] = useState("");
  let drawRectangle = () => {
    const rect = new Rectangle("blue", 100, 50);
    setRectangleInfo(rect.draw());
  };
  let drawSquare = () => {
    let square = new Square("blue", 150);
    setSquareInfo(square.draw());
  };
  let drawCircle = () => {
    let circle = new Circle("green",39);
    setCircleInfo(circle.draw());
  };
  return (
    <div className="App">
      <div>
        <h1>Rectangle Drawing App</h1>
        <button onClick={drawRectangle}>Draw Rectangle</button>
      </div>
      <div>
        <h1>Square Drawing App</h1>
        <button onClick={drawSquare}>Draw Square</button>
      </div>
      <div>
        <h1>Circle Drawing App</h1>
        <button onClick={drawCircle}>Draw Circle</button>
      </div>
    </div>
  );
}

export default App;
