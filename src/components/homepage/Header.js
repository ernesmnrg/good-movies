import React from "react";
import "../../assets/styles/_headers.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={require("../../assets/images/good-time.png")} />
      </div>
      <div className="header__search">
        <i className="material-icons"></i>
        <input type="search" name="search" placeholder="search" />
      </div>
      <div className="header__list">
        <ul>
          <li className="active">
            <a href="#signin">SIGN IN</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
