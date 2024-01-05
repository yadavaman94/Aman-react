import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="https://nutz.in/uploads/portfolio/Food_Hunt.jpg" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const heading = React.createElement("h1", { id: "heading" }, "Namestey AMAN");
const root = ReactDOM.createRoot(document.getElementById("root"));

const HeadingComponent = () => <h1>this is heading component</h1>;

root.render(<AppLayout />);
