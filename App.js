const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("div", { id: "grandchild1" }, "Grandchild 1"),
    React.createElement("div", { id: "grandchild2" }, "Grandchild 2")
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("div", { id: "grandchild1" }, "Grandchild 1"),
    React.createElement("div", { id: "grandchild2" }, "Grandchild 2")
  ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);
