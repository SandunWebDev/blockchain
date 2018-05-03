import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import logo from "../../assets/logo.png";
import offlineLogo from "../../assets/offlineLogo.svg";
import "./Header.css";

class Header extends Component {
  render() {
    console.log(this.props);
    const headerStyle = {
      background: this.props.location.pathname === "/" ? "rgba(62, 34, 46, 0.3)" : "rgba(62, 34, 46, 1)",
      position: this.props.location.pathname === "/" ? "absolute" : "static"
    };

    return (
      <div className="Header" style={headerStyle}>
        {/* <div className="Header"> */}
        <div className="Header__wrapper pageWrapper">
          <div className="Header__logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="Header__links">
            <ul>
              <li>
                <Link to="/dapp">MARKETPLACE</Link>
              </li>
              <li>
                <Link to="/dapp">MY&nbsp;ASSETS</Link>
              </li>
              <li style={{ display: "none" }}>ONLINE</li>
              <li>
                <img src={offlineLogo} alt="" title="Online" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
