import React, { Component } from "react";

import { Button, Icon } from "semantic-ui-react";

import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <div className="Homepage__splash">
          <div className="HomePage__wrapper">
            <h1 className="Homepage__splash__title">OWN A PIECE OF THE MARS</h1>
            <div className="Homepage__splash__subtitle">ON THE BLOCKCHAIN</div>
            <Button color="teal" icon labelPosition="right" className="Homepage__splash__button">
              <Icon name="world" />
              ENTER
            </Button>
            <div className="Homepage__splash__follow">
              <h4>FOLLLOW US ON</h4>
              <Button size="tiny" circular color="facebook" icon="facebook" />
              <Button size="tiny" circular color="twitter" icon="twitter" />
              <Button size="tiny" circular color="linkedin" icon="linkedin" />
              <Button size="tiny" circular color="google plus" icon="google plus" />
            </div>
          </div>
        </div>
        <div class="Homepage__section1">
          <div>
            <h1>Mars Domination on the Blockchain</h1>
            <p>Buy Countries as Smart Contracts using blockchain technology and take over the world map.</p>
            <p>
              Be the emperor of the mars and own Countries such as The United States, China or Thailand as Smart
              Contracts on the Ethereum Blockchain.
            </p>
            <p>
              CryptoCountries is an interactive game that lets anyone buy and own countries as Smart Contracts on the
              Ethereum Blockchain. As soon as you acquire a country, you take ownership of that nation and it
              automatically increases in price.
            </p>
            <p>
              Careful though! If someone else wants to grab your territory, they can by paying up to double the price
              that you paid. You will then lose the ownership of that country, but you will receive up to double the
              amount in ETH automatically transferred back to your crypto wallet.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
