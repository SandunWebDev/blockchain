import React, { Component } from "react";
import { Table, Label, Header, Icon } from "semantic-ui-react";
import "./HowPage.css";

class HowPage extends Component {
  render() {
    return (
      <div className="HowPage">
        <div className="pageWrapper">
          <div className="HowPage__header">
            <Header as="h1" icon>
              <Icon name="lab" />
              HOW IT WORKS
              <Header.Subheader>
                <h3>Learn How To Build Your Empire</h3>
              </Header.Subheader>
            </Header>
          </div>
          <p>Here’s all you need to know about Crypto Mars:</p>
          <p>
            Every available colony has one smart contract token. If you buy it, you own it, and your ownership will be
            visible on our interactive world map as the HEX color of the six last characters in your wallet address.
          </p>
          <p>
            The countries are visible on the Ethereum Blockchain as smart contracts. Meaning, they can only be acquired
            using Ether. Each colony contract works similarly to a token or a coin and can only be owned by one
            individual.
          </p>
          <p>
            You can conquer any available colony on the map. Anyone else can also purchase and conquer your owned
            countries as long as they pay you the new price calculated from the smart contract after you acquired the
            colony previously.
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
        </div>
      </div>
    );
  }
}

export default HowPage;
