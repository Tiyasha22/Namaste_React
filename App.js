const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Namaste React"),
    React.createElement("h2", {}, "Namaste React"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React 2"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
