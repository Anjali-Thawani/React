const RestaurantCardComponent = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        alt="res-logo"
        className="res-logo"
        src={resData.imgSrc} />
      <h3>{resData.resName}</h3>
      <h4>{resData.cuisine}</h4>
      <h4 className="star-rating">{resData.rating} Stars</h4>
      <button className="order">Order Now</button>

    </div>
  )
}

export default RestaurantCardComponent;