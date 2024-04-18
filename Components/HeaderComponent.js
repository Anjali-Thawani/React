import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

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
      <div className="user">
        <button type="submit" className="user-button">
          <FontAwesomeIcon icon={faUserCircle} size="2xl" />
        </button>
        <div className="label">Sign Up</div>
      </div>

    </div>
  )
}

export default HeaderComponent;