import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, Popup, Input } from "semantic-ui-react";

import { titleCase } from "../../helpers/commonFunctions";
import logo from "../../assets/logo.png";
import "./Header.css";

class Header extends Component {
  state = { isOpen: false };

  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { connectStatus, ethereum, changeEthereumDetails } = this.props;

    const headerStyle = {
      background: this.props.location.pathname === "/" ? "rgba(62, 34, 46, 0.8)" : "rgba(62, 34, 46, 1)",
      position: this.props.location.pathname === "/" ? "absolute" : "static"
    };

    // const marketplaceActivePathStyle = {
    //   borderBottom: this.props.location.pathname === "/dapp" ? "2px solid blue" : "",
    //   color: this.props.location.pathname === "/dapp" ? "2px solid blue !important" : ""
    // };

    // const myassetsActivePathStyle = {
    //   borderBottom: this.props.location.pathname === "/myassets" ? "2px solid blue" : "",
    //   color: this.props.location.pathname === "/myassets" ? "blue" : ""
    // };

    const connectLogoStyle = connectStatus === "true" ? "#659D32" : "red";
    const connectUsernameStyle =
      connectStatus === "true" ? { display: "initial", background: ethereum.color } : { display: "none" };

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
                <Link to="/myassets">MY&nbsp;ASSETS</Link>
              </li>
              {this.props.location.pathname !== "/" ? (
                <Popup
                  open={this.state.isOpen}
                  onClose={this.handleClose}
                  onOpen={this.handleOpen}
                  trigger={
                    <li className="Header__links__connectUsername" style={connectUsernameStyle}>
                      {titleCase(ethereum.username)}
                    </li>
                  }
                  content={
                    <div>
                      <Input
                        ref="nameInput"
                        icon="users"
                        iconPosition="left"
                        placeholder="NICK NAME"
                        label={
                          <Button
                            color="green"
                            content="CHANGE"
                            onClick={() => {
                              if (this.refs.nameInput.inputRef.value === "") {
                                return this.handleClose();
                              }
                              changeEthereumDetails({ username: this.refs.nameInput.inputRef.value });
                              this.handleClose();
                            }}
                          />
                        }
                        labelPosition="right"
                      />
                    </div>
                  }
                  on="click"
                  position="bottom center"
                />
              ) : (
                ""
              )}

              <Popup
                trigger={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28.39 45.36"
                    width="25"
                    height="25"
                    title={connectStatus === "true" ? "ONLINE" : "OFFLINE"}
                    className={connectStatus === "pending" ? "loading" : ""}
                  >
                    <g>
                      <path
                        fill={connectLogoStyle}
                        d="M2.48,29.91l10.89,15a1,1,0,0,0,1.65,0l10.89-15a1,1,0,0,0-1.35-1.48l-9.84,5.86a1,1,0,0,1-1.05,0L3.83,28.43A1,1,0,0,0,2.48,29.91Z"
                      />
                      <path
                        fill={connectLogoStyle}
                        d="M28.23,21.18,15.06.47a1,1,0,0,0-1.72,0L.16,21.18a1,1,0,0,0,.35,1.43l13.18,7.53a1,1,0,0,0,1,0l13.18-7.53A1,1,0,0,0,28.23,21.18Z"
                      />
                    </g>
                  </svg>
                }
                content={connectStatus === "true" ? `ONLINE ${ethereum.hash} ` : "OFFLINE"}
                on="hover"
                position="bottom center"
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
