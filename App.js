import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    // Added key
    React.createElement(
      "div",
      { id: "grandchild1_1", key: "grandchild1_1" },
      "Grandchild 1"
    ), // Added unique key
    React.createElement(
      "div",
      { id: "grandchild2_1", key: "grandchild2_1" },
      "Grandchild 2"
    ) // Added unique key
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    // Added key
    React.createElement(
      "div",
      { id: "grandchild1_2", key: "grandchild1_2" },
      "Grandchild 1"
    ), // Added unique key
    React.createElement(
      "div",
      { id: "grandchild2_2", key: "grandchild2_2" },
      "Grandchild 2"
    ) // Added unique key
  ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

console.log(parent);
