import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Button, Card, Icon, Label } from "semantic-ui-react";

import mainSection_image1 from "../../assets/mainSection_image1.jpg";
import mainSection_image2 from "../../assets/mainSection_image2.jpg";
import mainSection_image3 from "../../assets/mainSection_image3.png";
import mainSection_image4 from "../../assets/mainSection_image4.jpg";
import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <div className="Homepage__splash__transparent" />
        <div className="Homepage__splash">
          <div className="HomePage__splash__wrapper pageWrapper">
            <h1 className="Homepage__splash__title">OWN A PIECE OF THE MARS</h1>
            <div className="Homepage__splash__subtitle">ON THE BLOCKCHAIN</div>
            <Link to="/dapp">
              <Button color="teal" icon labelPosition="right" className="Homepage__splash__button">
                <Icon name="external" />
                ENTER
              </Button>
            </Link>
            <div className="Homepage__splash__follow">
              <h4>FOLLLOW US ON</h4>
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
            </div>
          </div>
        </div>
        <div className="Homepage__section">
          <div className="pageWrapper">
            <div className="Homepage__section__description">
              <h1>Mars Domination on the Blockchain</h1>
              <p>Buy Colonies as Smart Contracts using blockchain technology and take over the mars map.</p>
              <p>
                Be the emperor of the mars and own Colonies such as The North Terra, Acdial Terra or Ididis Torrum as
                Smart Contracts on the Ethereum Blockchain.
              </p>
              <p>
                Crypto Mars is an interactive game that lets anyone buy and own Colonies as Smart Contracts on the
                Ethereum Blockchain. As soon as you acquire a colony, you take ownership of that nation and it
                automatically increases in price.
              </p>
              <p>
                Careful though! If someone else wants to grab your territory, they can by paying up to double the price
                that you paid. You will then lose the ownership of that colony, but you will receive up to double the
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
              <h1>Announcing Colonies</h1>
              <p>
                Colonies is an exciting upcoming addition to the mars of Crypto Mars. With the upcoming addition of
                Colonies, colony owners will start to see real benefit of owning Colonies.
              </p>
              <p>
                Colonies will also allow new players and beginners to get into the mars of blockchain gaming and Crypto
                Mars with a far lower threshold, while at the same time get to experience the fast-paced and exciting
                gameplay of trading collectibles.
              </p>
            </div>
          </div>
        </div>
        <div className="Homepage__section">
          <div className="pageWrapper">
            <div className="Homepage__section__description">
              <h1>Most Player Friendly Value increase</h1>
              <p>
                Crypto Mars has by far the most player friendly value increase model with the absolute lowest
                commissions. Compared to other collectible games that take massive commisions on each purchase, Crypto
                Mars value the players and the game. If you don't believe it, check it our for yourself by reading our
                Smart Contract and comparing it with others.
              </p>
              <p>
                In Crypto Mars you can conquer any available colony on the map. Any other player can also purchase and
                conquer your Colonies as long as they pay up to double the amount of what you paid to conquer the colony
                in the first place.
              </p>
              <p>
                The new price including the profit is then transferred back to the previous owner of the colony
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
              <Card.Group className="roadmap-active raised" itemsPerRow={2}>
                <Card color="red">
                  <Label as="span" color="green" ribbon>
                    Completed
                  </Label>
                  <Card.Content header="Phase 1 - Launch MVP" />
                  <Card.Content description="Crypto Mars goes live to the mars. We start of with a minimal UI and limited marketing to crypto enthusiasts and websites." />
                </Card>
                <Card color="green">
                  <Card.Content header="Phase 2 - Releasing all Colonies" />
                  <Card.Content description="Staged and controlloed roll-out of all Colonies. In this phase we start to ramp up the marketing a bit more with advertising and improved social media presence." />
                </Card>
                <Card color="orange">
                  <Card.Content header="Phase 3 - UI & UX Improvements" />
                  <Card.Content description="We continue giving love to our UI by adding new functionality and improving the UX. We are launcing Toplists, Pagination, Backend service and much more during this phase." />
                </Card>
                <Card color="blue">
                  <Card.Content header="Phase 4 - Release of Colonies" />
                  <Card.Content description="In Phase 4 things get interesting. We are together with an improved UI launching the addition of Colonies. It is also in this phase that colony owners will start to see some real benefit of owning Colonies. Of course, this release is timed with a big marketing push." />
                </Card>
                <Card color="violet">
                  <Card.Content header="Phase 5 - Secret Release" />
                  <Card.Content description="Directly after the launch of Colonies, we have a very unique and special release in store for all the players. This release will be kept secret until launch, but will for sure add an extra touch to the mars of Crypto Mars." />
                </Card>
                <Card color="pink">
                  <Card.Content header="Phase 6 - Marswide Marketing & PR Campaign" />
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
                Crypto Mars runs on the Ethereum blockchain. Each colony is linked to one single Smart Contract Token on
                the game’s blockchain.
              </p>
              <p>
                To conquer (purchase) a colony Smart Contract: Send Ether to the contract using Metamask. As soon as
                your transaction has been confirmed you (and only you) have ownership of that colony.
              </p>
              <p>
                To show off your conquest to the rest of the mars, the colony territory on the game’s interactive mars
                map is colored as the six last characters of your wallet address.
              </p>
              <p>
                If someone else conquers your colony, you will lose the ownership, but get up to double in return of
                investment of Ether automatically sent back to your wallet.
              </p>
            </div>
          </div>
        </div>
        <div className="Homepage__section">
          <div className="pageWrapper">
            <div className="Homepage__section__final">
              <h1>Start conquering the mars</h1>
              <h2>Be like the romans and own the mars on the Blockchain</h2>
              <Link to="/dapp">
                <Button color="black" icon labelPosition="right">
                  START YOUR EMPIRE
                  <Icon name="right arrow" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
