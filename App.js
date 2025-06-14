import React from "react";
import ReactDOM from "react-dom/client";

// jsx syntax for React elements
const jsxHeading = <h1 id="heading">Hello World from JSX</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
console.log(jsxHeading);

// React comnponent
// functional component => new way of creating components

// component name should start with capital letter, functional component is a function that returns JSX
const Heading = () =>
  <h1 id="heading">Hello World from Functional Component</h1>;

const Heading2 = () =>
  <div>
    <h1 id="heading2" className="heading2">
      Hello World from Functional Component 2
    </h1>
    <Heading />
  </div>;

// render the component
root.render(<Heading2 />);

// component composition, putting components inside other components.
