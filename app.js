import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", { id: "heading" }, "hi i am h1 tag");
const heading2 = React.createElement("h2", { id: "heading2" }, "hi i am h2 tag");

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [heading1, heading2]),
  React.createElement("div", { id: "child2" }, [heading1, heading2])
]);

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
