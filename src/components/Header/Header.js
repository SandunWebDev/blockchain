import React, { Component } from "react";

import logo from "../../assets/logo.png";
import offlineLogo from "../../assets/offlineLogo.svg";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header__wrapper pageWrapper">
          <div className="Header__logo">
            <img src={logo} alt="" />
          </div>
          <div className="Header__links">
            <ul>
              <li>MARKETPLACE</li>
              <li>MY&nbsp;ASSETS</li>
              <li>ONLINE</li>
              <li>
                <img src={offlineLogo} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
