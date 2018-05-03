import React, { Component } from "react";

import { Button, Card, Icon } from "semantic-ui-react";

import mainSection_image1 from "../../assets/mainSection_image1.png";
import mainSection_image2 from "../../assets/mainSection_image2.jpg";
import mainSection_image3 from "../../assets/mainSection_image3.jpg";
import mainSection_image4 from "../../assets/mainSection_image4.png";
import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <div className="Homepage__splash">
          <div className="HomePage__splash__wrapper pageWrapper">
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
        <div className="Homepage__section">
          <div className="pageWrapper">
            <div className="Homepage__section__description">
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
            <div className="Homepage__section__image">
              <img src={mainSection_image1} alt="" />
            </div>
          </div>
        </div>
        <div className="Homepage__section">
          <div className="pageWrapper">
            <div className="Homepage__section__image">
              <img src={mainSection_image2} alt="" />
            </div>
            <div className="Homepage__section__description">
              <h1>Announcing Cities</h1>
              <p>
                Cities is an exciting upcoming addition to the world of CryptoCountries. With the upcoming addition of
                cities, country owners will start to see real benefit of owning countries.
              </p>
              <p>
                Cities will also allow new players and beginners to get into the world of blockchain gaming and
                CryptoCountries with a far lower threshold, while at the same time get to experience the fast-paced and
                exciting gameplay of trading collectibles.
              </p>
            </div>
          </div>
        </div>
        <div className="Homepage__section">
          <div className="pageWrapper">
            <div className="Homepage__section__description">
              <h1>Most Player Friendly Value increase</h1>
              <p>
                CryptoCountries has by far the most player friendly value increase model with the absolute lowest
                commissions. Compared to other collectible games that take massive commisions on each purchase,
                CryptoCountries value the players and the game. If you don't believe it, check it our for yourself by
                reading our Smart Contract and comparing it with others.
              </p>
              <p>
                In CryptoCountries you can conquer any available country on the map. Any other player can also purchase
                and conquer your countries as long as they pay up to double the amount of what you paid to conquer the
                country in the first place.
              </p>
              <p>
                The new price including the profit is then transferred back to the previous owner of the country
                automatically.
              </p>
            </div>
            <div className="Homepage__section__image">
              <img src={mainSection_image3} alt="" />
            </div>
          </div>
        </div>
        <div className="Homepage__section">
          <div className="pageWrapper">
            <h1>Road Map</h1>
            <div className="Homepage__section__roadmap">
              <Card.Group itemsPerRow={2}>
                <Card color="red">
                  <Card.Content header="Phase 1 - Launch MVP" />
                  <Card.Content description="CryptoCountries goes live to the world. We start of with a minimal UI and limited marketing to crypto enthusiasts and websites." />
                </Card>
                <Card color="green">
                  <Card.Content header="Phase 2 - Releasing all Countries" />
                  <Card.Content description="Staged and controlloed roll-out of all countries. In this phase we start to ramp up the marketing a bit more with advertising and improved social media presence." />
                </Card>
                <Card color="orange">
                  <Card.Content header="Phase 3 - UI & UX Improvements" />
                  <Card.Content description="We continue giving love to our UI by adding new functionality and improving the UX. We are launcing Toplists, Pagination, Backend service and much more during this phase." />
                </Card>
                <Card color="blue">
                  <Card.Content header="Phase 4 - Release of Cities" />
                  <Card.Content description="In Phase 4 things get interesting. We are together with an improved UI launching the addition of cities. It is also in this phase that country owners will start to see some real benefit of owning countries. Of course, this release is timed with a big marketing push." />
                </Card>
                <Card color="violet">
                  <Card.Content header="Phase 5 - Secret Release" />
                  <Card.Content description="Directly after the launch of cities, we have a very unique and special release in store for all the players. This release will be kept secret until launch, but will for sure add an extra touch to the world of CryptoCountries." />
                </Card>
                <Card color="pink">
                  <Card.Content header="Phase 6 - Worldwide Marketing & PR Campaign" />
                  <Card.Content description="This is when we go big on the marketing. At this stage we have all the components in place to be a truly unique and attractvie game for all audiences that let´s us go to mainstream media." />
                </Card>
              </Card.Group>
            </div>
          </div>
        </div>
        <div className="Homepage__section">
          <div className="pageWrapper">
            <div className="Homepage__section__image">
              <img src={mainSection_image4} alt="" />
            </div>
            <div className="Homepage__section__description">
              <h1>Take Map Control</h1>
              <p>
                CryptoCountries runs on the Ethereum blockchain. Each country is linked to one single Smart Contract
                Token on the game’s blockchain.
              </p>
              <p>
                To conquer (purchase) a Country Smart Contract: Send Ether to the contract using Metamask. As soon as
                your transaction has been confirmed you (and only you) have ownership of that country.
              </p>
              <p>
                To show off your conquest to the rest of the world, the country territory on the game’s interactive
                world map is colored as the six last characters of your wallet address.
              </p>
              <p>
                If someone else conquers your country, you will lose the ownership, but get up to double in return of
                investment of Ether automatically sent back to your wallet.
              </p>
            </div>
          </div>
        </div>
        <div className="Homepage__section">
          <div className="pageWrapper">
            <div className="Homepage__section__final">
              <h1>Start conquering the world</h1>
              <h2>Be like the romans and own the world on the Blockchain</h2>
              <Button color="black" icon labelPosition="right">
                START YOUR EMPIRE
                <Icon name="right arrow" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
