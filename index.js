import { useState, React } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import equations from "./equations.js";


function Calculator() {

const [answer, setAnswer] = useState("");

function solve(){
let op = document.getElementById("operation").value;
let num1 = parseFloat(document.getElementById("num1").value);
let num2 = parseFloat(document.getElementById("num2").value);


switch(op){
case ("+"):
setAnswer(equations.add(num1, num2));
break;
case("-"):
setAnswer(equations.subtract(num1, num2));
break;
case("x"):
setAnswer(equations.multiply(num1, num2));
break;
case("%"):
setAnswer(equations.divide(num1, num2));
break;
}

}

  return (
    <div>
      <input type = "text" id = "num1"></input>
      <select id = "operation">
      <option>+</option>
      <option>-</option>
      <option>x</option>
      <option>%</option>
      </select> 
      <input type = "text" id = "num2"></input> = <span>{answer}</span>
      <br/>
      <button onClick={() => solve()}>answer</button>
      
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Calculator />);