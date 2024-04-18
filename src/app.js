import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent';
import MainComponent from './components/MainComponent';
import { foodObject } from './utils/foodObject';
const AppLayoutComponent = () => {
  let [ListFoodItem, setListFoodItem] = useState(foodObject)

  const filterData = () => {
    const filterFoodList = ListFoodItem.filter(item => item.rating > 3);
    setListFoodItem(filterFoodList)
  }

  return (
    <div className="app">
      <HeaderComponent applyFilter={filterData} />
      <MainComponent setFoodList={ListFoodItem} />
      <FooterComponent />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutComponent />)