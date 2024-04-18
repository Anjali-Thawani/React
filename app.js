import React from 'react';
import ReactDOM from "react-dom/client";
import HeaderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent';
import MainComponent from './Components/MainComponent';

const AppLayoutComponent = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutComponent />)