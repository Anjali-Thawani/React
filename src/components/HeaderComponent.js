import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faFilter } from '@fortawesome/free-solid-svg-icons';
import LOGO_URL from '../utils/constants';
import { foodObject } from '../utils/foodObject';
import { useState } from 'react';


const HeaderComponent = (props) => {
  const { applyFilter } = props;
  return (
    <div className="header">
      <div className="logo"><img src={LOGO_URL} width="20%" /></div>
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
        <button type="submit" className="user-button" onClick={applyFilter}>
          <FontAwesomeIcon icon={faFilter} size="2xl" />
        </button>

      </div>

    </div>
  )
}

export default HeaderComponent;