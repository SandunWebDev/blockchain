import React, { Component } from "react";
import { Table, Header, Icon } from "semantic-ui-react";
import "./HowPage.css";

class HowPage extends Component {
  render() {
    return (
      <div className="HowPage">
        <div className="pageWrapper">
          <div className="HowPage__header">
            <Header icon>
              <Icon name="lab" />
              <h1>HOW IT WORKS</h1>
              <Header.Subheader>
                <h3>Learn How To Build Your Empire On Mars</h3>
              </Header.Subheader>
            </Header>
          </div>
          <div className="HowPage__content">
            <p>Here’s all you need to know about Crypto Mars:</p>
            <p>
              Every available Mars Area area place has one smart contract token. If you buy it, you own it, and your
              ownership will be visible on our interactive world map as the HEX color of the six last characters in your
              wallet address.
            </p>
            <p>
              The mars areas are visible on the Ethereum Blockchain as smart contracts. Meaning, they can only be
              acquired using Ether. Each Mars Area area contract works similarly to a token or a coin and can only be
              owned by one individual.
            </p>
            <p>
              You can conquer any available Mars Area area on the map. Anyone else can also purchase and conquer your
              owned mars areas as long as they pay you the new price calculated from the smart contract after you
              acquired the Mars Area area previously.
            </p>
            <p>The price increase is hard coded into the smart contract and follow this model:</p>
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
            <p>
              Each owner of a Mars Area is considered as an Emperor and later, when MarsCountries are released each Mars
              Area will get 1- 10 countries under its ruling. The Emperor also get commission when somebody brought one
              of there countries during his ownership of area period.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HowPage;
