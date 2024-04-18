const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo"><img src="https://cdn.dribbble.com/users/1191192/screenshots/4250680/foodie_faster.jpg" width="20%" /></div>
      <div className="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Restaurant</a></li>
          <li><a href="#">Cart</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderComponent;