import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer__wrapper pageWrapper">
          <div className="Footer__section">
            <h4>About</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/how">How It Works</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <a href="https://www.google.com/search?q=crypto+currency" target="_blank" rel="noopener noreferrer">
                  Press
                </a>
              </li>
              <li>
                <Link to="/tos">Terms of Service</Link>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Button size="tiny" circular color="facebook" icon="facebook" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Button size="tiny" circular color="twitter" icon="twitter" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Button size="tiny" circular color="linkedin" icon="linkedin" />
                </a>
                <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer">
                  <Button size="tiny" circular color="google plus" icon="google plus" />
                </a>
              </li>
            </ul>
          </div>
          <div className="Footer__section">
            <h4>The Game</h4>
            <ul>
              <li>
                <Link to="/dapp">Marketplace</Link>
              </li>
              <li>
                <Link to="/dapp">My Countries</Link>
              </li>
              <li>
                <Link to="/">Bounty Program</Link>
              </li>
            </ul>
          </div>
          <div className="Footer__section">
            <a href="https://www.ethereum.org/" target="_blank" rel="noopener noreferrer">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </a>
          </div>
          <div className="Footer__section">
            <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer">
              <img src="https://cryptocountries.io/static/media/meta.5d168b61.png" alt="" />
            </a>
            <h4>All rights reserved. © 2018 CryptoMars</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
