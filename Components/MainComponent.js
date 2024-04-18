import RestaurantCardComponent from './RestaurantCardComponent';
import SearchComponent from './SearchComponent';
import { foodObject } from '../foodObject';

const MainComponent = () => {
  return (
    <div className="main-container">
      <SearchComponent />
      <div className="res-container">{foodObject.map(foodItem =>
        <RestaurantCardComponent
          resData={foodItem}
        />
      )}
      </div>

      <div className="res-container">{foodObject.map(foodItem =>
        <RestaurantCardComponent
          resData={foodItem}
        />
      )}
      </div>
    </div>
  )
}

export default MainComponent;