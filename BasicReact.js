import React from "react";
import ReactDOM from "react-dom/client";

const LogoComponent = () => <h1><span id="firstName">Anjali</span> Tech</h1>

const NavComponent = () => {
  return (
    <div className="nav">
      <li><a href="#">Home</a></li>
      <li><a href="#">Career</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Contact Us</a></li>
    </div>
  )
}
const Header = () => {
  return (
    <div className="container">
      <LogoComponent />
      <NavComponent />
    </div>
  )
};
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Header />)