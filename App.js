import React from "react";
import ReactDOM from "react-dom/client";
//react element
const jsxHeading = <h1>Hello from JSX</h1>;

//react functional component

const Title = function () {
  return <h2>Namaste React</h2>;
};
const HeadingComponent = () => (
  <div>
    <h1>Hi from Functional component</h1>
    <Title />
  </div>
);
// ● Create a Nested header Element using React.createElement(h1,h2,h3 inside a
//   div with class “title”)
//   ○ Create the same element using JSX
//   ○ Create a functional component of the same with JSX
//   ○ Pass attributes into the tag in JSX
//   ○ Composition of Component(Add a component inside another)
//   ○ {TitleComponent} vs {<TitleComponent/>} vs
//   {<TitleComponent></TitleComponent>} in JSX

//   ● Create a Header Component from scratch using Functional Components with
//   JSX
//   ○ Add a Logo on left
//   ○ Add a search bar in middle
//   ○ Add User icon on right
//   ○ Add CSS to make it look nice

const header = React.createElement("div", { className: "title" }, [
  React.createElement("h1", { id: "h1" }, "hello"),
  React.createElement("h2", { id: "h2" }, "hello"),
  React.createElement("h3", { id: "h3" }, "hello"),
]);
const headerJSX = (
  <div className="title">
    <h1>hellow</h1>
    <h2>hi</h2>
    <h3>hey</h3>
  </div>
);

const HeaderComponent = function () {
  return (
    <div className="title">
      <Title />
      <h1>hellow</h1>
      <h2>hi</h2>
      <h3>hey from C</h3>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
// root.render(<HeadingComponent />);
root.render(<HeaderComponent />);
