import RestaurantCardComponent from './RestaurantCardComponent';
import SearchComponent from './SearchComponent';

const MainComponent = (props) => {
  const { setFoodList, applySearch } = props;
  return (
    <div className="main-container">
      <SearchComponent applySearchToComp={applySearch} />
      <div className="res-container">{
        setFoodList == "Not_Found" ?
          <h1>Data Not Found </h1> :
          setFoodList.map(foodItem =>
            < RestaurantCardComponent
              key={foodItem.info.id}
              resData={foodItem}
            />
          )}
      </div>


    </div >
  )
}

export default MainComponent;