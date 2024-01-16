import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const heading = React.createElement("h1", { id: "heading" }, "Namestey AMAN");
const root = ReactDOM.createRoot(document.getElementById("root"));

const HeadingComponent = () => <h1>this is heading component</h1>;

root.render(<AppLayout />);
