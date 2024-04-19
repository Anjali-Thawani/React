import { IMG_SRC } from "../utils/constants";

const RestaurantCardComponent = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        alt="res-logo"
        className="res-logo"
        src={IMG_SRC + resData.info.cloudinaryImageId}
      />
      <h3>{resData.info.name.substring(0, 20)}</h3>
      <h4>{resData.info.locality}</h4>
      <h4 className="star-rating">{resData.info.avgRating} Stars</h4>
      <button className="order">Order Now</button>

    </div >
  )
}

export default RestaurantCardComponent;