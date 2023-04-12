// Step 1: Create an HTML element using ReactJS.

import React from "react";
import ReactDOM from "react-dom";
const element = React.createElement("div", { class: "parent" }, [
  React.createElement("div", { Style: "background:red", class: "child1" }, [
    React.createElement(
      "h1",
      { id: "heading1" },
      "This is my heading-1 from child-1"
    ),
    React.createElement(
      "h1",
      { id: "heading2" },
      "This is my heading-2 from child-1"
    ),
  ]),
  React.createElement(
    "div",
    { Style: "background:green; color:white", class: "child2" },
    [
      React.createElement(
        "h1",
        { id: "heading1" },
        "This is my heading-1 from child-2"
      ),
      React.createElement(
        "h1",
        { id: "heading2" },
        "This is my heading-2 from child-2"
      ),
    ]
  ),
]);
// It's also a JSX element same as above.
const jsxElement = <h2>This is my heading 2.</h2>;
// Step 2: Create a Root element using ReactJS.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Step 3: Render all HTML elements using ReactJS on the web page.
root.render(element);
root.render(jsxElement);
