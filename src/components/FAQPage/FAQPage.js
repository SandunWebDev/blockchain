import React, { Component } from "react";
import { Header, Icon, Accordion, Table } from "semantic-ui-react";

import "./FAQPage.css";

class FAQPage extends Component {
  state = { activeIndex: 3, activeIndex1: 8 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  handleClick1 = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex1 } = this.state;
    const newIndex = activeIndex1 === index ? -1 : index;

    this.setState({ activeIndex1: newIndex });
  };

  render() {
    const { activeIndex, activeIndex1 } = this.state;

    return (
      <div className="FAQPage">
        <div className="pageWrapper">
          <div className="FAQPage__header">
            <Header icon>
              <Icon name="find" />
              <h1>FAQ</h1>
              <Header.Subheader>
                <h3>If You Got A Prblem - Answer Is Here</h3>
              </Header.Subheader>
            </Header>
          </div>
          <div className="FAQPage__content">
            <div className="FAQPage__content__title">Get Started</div>
            <Accordion fluid styled>
              <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                <Icon name="dropdown" />
                What do I need to play Crypto Mars?
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <p>
                  To start your conquest in Crypto Mars you need:
                  <ul>
                    <li>A computer with Chrome or Firefox</li>
                    <li>A MetaMask wallet</li>
                    <li>Ether in your wallet to fund your conquests</li>
                  </ul>
                </p>
              </Accordion.Content>

              <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                <Icon name="dropdown" />
                How do I install MetaMask?
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 1}>
                <p>
                  In order to buy contracts and sell your contracts, you’ll need to install the digital wallet Metamask
                  on your Chrome or Firefox browser and load it up with ether.
                  <ul>
                    <li>Go to Google Chrome Store and click “Add to Chrome”.</li>
                    <li>Click “Add Extension” on the pop-up.</li>
                    <li>Set up your MetaMask account.</li>
                    <li>
                      Copy your 12 seed words and file them away somewhere safe (this helps to secure your account).
                    </li>
                    <li>
                      For security purposes, MetaMask browser extension will sometimes request that you log back in to
                      your account. If you see a lock screen on when using the game of Crypto Mars, this security
                      precaution is probably cause – just click on the MetaMask or Mist extension, log back in to
                      continue buying countries and take map control.
                    </li>
                  </ul>
                </p>
              </Accordion.Content>

              <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                <Icon name="dropdown" />
                How do I add ether to my MetaMask?
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 2}>
                <p>There are two common ways to add ether to your wallet.</p>
                <ul>
                  <li>
                    The most common way is to buy Ether through an exchange such as Coinbase, Bitstamp or similar. As
                    soon as that is done, transfer the funds to your MetaMask or Mist wallet using the wallet in the
                    exchange of your choice.
                  </li>
                  <li>You can also buy ether directly in MetaMask. This, however, is only possible for US citizens.</li>
                </ul>
                <p>
                  If you already own Ether you can transfer funds directly to your MetaMask or Mist wallet by copying
                  the wallet address. In the exchange wallt you then simply paste that address and send the funds.
                </p>
              </Accordion.Content>
            </Accordion>

            <div className="FAQPage__content__title">What is Crypto Mars all about?</div>
            <Accordion fluid styled>
              <Accordion.Title active={activeIndex1 === 0} index={0} onClick={this.handleClick1}>
                <Icon name="dropdown" />
                What is Crypto Mars really?
              </Accordion.Title>
              <Accordion.Content active={activeIndex1 === 0}>
                <p>
                  CryptoMars ​is a game designed to give fun and knowledge about the Planet Mars and the Blockchain.
                  Players can conquer the mars on the Blockchain and earn Ether while doing so.
                </p>
                <p>
                  Every Area is represented as a Smart Contract and there is only one contract per Mars Area. Once you
                  buy and conquer a Mars Area you take ownership of the Mars Area. The game’s interactive mars map is
                  then colored after the last six characters of your wallet for that Mars Area. If someone buys your
                  area, you lose ownership but earn up to double in return of investment back to your wallet.
                </p>
                <p>
                  In short terms, it is a game that earns you Ether the more you play it, more you know about the Planet
                  mars.
                </p>
              </Accordion.Content>

              <Accordion.Title active={activeIndex1 === 1} index={1} onClick={this.handleClick1}>
                <Icon name="dropdown" />
                What is two way profit?
              </Accordion.Title>
              <Accordion.Content active={activeIndex1 === 1}>
                <p>Each user will get profited by 2 ways :</p>
                <ol>
                  <li>
                    When someone brought your place you will get up to double the amount back what you initially paid.
                  </li>
                  <li>
                    Each owner of a MarsArea is considered as an Emperor and later, when MarsCountries are released each
                    Mars Area you will get 1- 10 countries under its ruling. The Emperor also get commission when
                    somebody brought one of there countries during his ownership of area period
                  </li>
                </ol>
              </Accordion.Content>

              <Accordion.Title active={activeIndex1 === 2} index={2} onClick={this.handleClick1}>
                <Icon name="dropdown" />
                How much is a Place?
              </Accordion.Title>
              <Accordion.Content active={activeIndex1 === 2}>
                <p>
                  It depends on the Mars Area and how popular it is. Since each Mars Area doubles in price after ever
                  conquest (purchase).
                </p>
                <Table celled>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Value Increase Levels</Table.HeaderCell>
                      <Table.HeaderCell>Price Range</Table.HeaderCell>
                      <Table.HeaderCell>Price Increase</Table.HeaderCell>
                      <Table.HeaderCell>Dev Cut</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>Increase 1</Table.Cell>
                      <Table.Cell>0.001 ETH - 0.02 ETH</Table.Cell>
                      <Table.Cell>100%</Table.Cell>
                      <Table.Cell>5%</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Increase 2</Table.Cell>
                      <Table.Cell>0.02 ETH - 0.5 ETH</Table.Cell>
                      <Table.Cell>35%</Table.Cell>
                      <Table.Cell>4% </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Increase 3</Table.Cell>
                      <Table.Cell>0.5 ETH - 2.0 ETH</Table.Cell>
                      <Table.Cell>25%</Table.Cell>
                      <Table.Cell>3%</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Increase 4</Table.Cell>
                      <Table.Cell>2.0 ETH - 5.0 ETH</Table.Cell>
                      <Table.Cell>17%</Table.Cell>
                      <Table.Cell>3%</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Increase 5</Table.Cell>
                      <Table.Cell>5.0 ETH ></Table.Cell>
                      <Table.Cell>15%</Table.Cell>
                      <Table.Cell>2%</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Accordion.Content>
              <Accordion.Title active={activeIndex1 === 3} index={3} onClick={this.handleClick1}>
                <Icon name="dropdown" />
                Can I defend my countries and refuse to sell them?
              </Accordion.Title>
              <Accordion.Content active={activeIndex1 === 3}>
                <p>
                  As in most of the real world, money talks. If someone wants your Mars Area and have enough funds to
                  buy it, they are able to. But on the upside, you will earn up to double the amount back of what you
                  initially paid.
                </p>
              </Accordion.Content>
              <Accordion.Title active={activeIndex1 === 4} index={4} onClick={this.handleClick1}>
                <Icon name="dropdown" />
                Can I use regular currency (USD, EUR, etc) to buy Mars Area contracts?
              </Accordion.Title>
              <Accordion.Content active={activeIndex1 === 4}>
                <p>
                  No. Because Crypto Mars runs on the same blockchain technology used by Ethereum, Ether is the only
                  currency you can use to purchase countries. You can convert your standard currency into Ether through
                  an exchange.
                </p>
              </Accordion.Content>
              <Accordion.Title active={activeIndex1 === 5} index={5} onClick={this.handleClick1}>
                <Icon name="dropdown" />
                Is Crypto Mars a cryptocurrency?
              </Accordion.Title>
              <Accordion.Content active={activeIndex1 === 5}>
                <p>
                  You can think of Mars Area smart contracts as collectibles – the new version of baseball cards or
                  artwork. While they do have value, that value is based on their desirability. You can make money on
                  Crypto Mars smart contracts by selling the contracts in the game and receiving a higher ETH amount
                  than you originally invested. But this of course depends on the market, so please keep in mind that
                  there are not guarantees someone will buy a Mars Area from you.
                </p>
              </Accordion.Content>
              <Accordion.Title active={activeIndex1 === 6} index={6} onClick={this.handleClick1}>
                <Icon name="dropdown" />
                How are you making money?
              </Accordion.Title>
              <Accordion.Content active={activeIndex1 === 6}>
                <p>
                  We (the developers) take a very small cut of each transaction. The cut of the transaction depends on
                  the value of the transaction and is transparently disclosed in the smart contract code and can also be
                  found here.
                </p>
              </Accordion.Content>
            </Accordion>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQPage;
