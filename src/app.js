import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent';
import MainComponent from './components/MainComponent';
import { foodObject } from './utils/foodObject';
import { isEmpty } from 'lodash'
const AppLayoutComponent = () => {
  let [ListFoodItem, setListFoodItem] = useState(foodObject);
  let [SearchFoodItem, setFoodItem] = useState([]);

  const filterData = () => {
    const filterFoodList = ListFoodItem.filter(item => item.rating > 3);
    setListFoodItem(filterFoodList)
  }

  const searchData = (name) => {
    if (!isEmpty(name)) {
      const searchString = String(name).toLowerCase();
      const filteredData = ListFoodItem.filter(item => String(item.resName).toLowerCase().includes(searchString));
      if (!isEmpty(filteredData)) setFoodItem(filteredData);
      else {
        setFoodItem("Not_Found");
      }
    }
    else {
      setFoodItem([]);
    }
  }

  return (
    <div className="app">
      <HeaderComponent applyFilter={filterData} />
      <MainComponent
        applySearch={searchData}
        setFoodList={
          (!isEmpty(SearchFoodItem)) ?
            SearchFoodItem :
            ListFoodItem
        } />
      <FooterComponent />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutComponent />)