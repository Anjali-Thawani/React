import RestaurantCardComponent from './RestaurantCardComponent';
import SearchComponent from './SearchComponent';

const MainComponent = (props) => {
  const { setFoodList } = props;
  return (
    <div className="main-container">
      <SearchComponent />
      <div className="res-container">{setFoodList.map(foodItem =>
        < RestaurantCardComponent
          key={foodItem.id}
          resData={foodItem}
        />
      )}
      </div>


    </div >
  )
}

export default MainComponent;