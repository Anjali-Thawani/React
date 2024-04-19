import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom/client";
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent';
import MainComponent from './components/MainComponent';
import { API_URL } from './utils/constants'
import { isEmpty } from 'lodash'
import Shimmer from './components/shimmer';
const AppLayoutComponent = () => {
  let [ListFoodItem, setListFoodItem] = useState([]);
  let [SearchFoodItem, setFoodItem] = useState([]);

  useEffect(() => { apiCall() }, [])

  const apiCall = async () => {
    const data = await fetch(API_URL)
    const json = await data.json();
    const data2 = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListFoodItem(data2);
  }

  const filterData = () => {
    const filterFoodList = ListFoodItem.filter(item => item.info.avgRating > 4.5);
    setListFoodItem(filterFoodList)
  }

  const searchData = (name) => {
    if (!isEmpty(name)) {
      const searchString = String(name).toLowerCase();
      const filteredData = ListFoodItem.filter(item => String(item.info.name).toLowerCase().includes(searchString));
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
      {isEmpty(ListFoodItem) ? (
        <Shimmer />

      ) : (
        <>
          <MainComponent
            applySearch={searchData}
            setFoodList={!isEmpty(SearchFoodItem) ? SearchFoodItem : ListFoodItem}
          />
          <FooterComponent />
        </>
      )
      }

    </div >
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutComponent />)