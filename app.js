import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
  <div>
    <h1 id="heading">Hello React</h1>
    <a href="#">link</a>
  </div>
)


// React.createElement("h1", { id: "heading" }, "Hello React");

console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root, 'ttt')
root.render(heading)