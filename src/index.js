import React from "react";
import ReactDOM from "react-dom";
import * as Calc from "./calculator.js";

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png
// const Calc = new calc();
ReactDOM.render(
  <ul>
    <li>{Calc.default(1, 2)}</li>
    <li>{Calc.multiply(2, 3)}</li>
    <li>{Calc.subtract(7, 2)}</li>
    <li>{Calc.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
