import React, { Component } from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import HowPage from "./components/HowPage/HowPage";
import TOSPage from "./components/TOSPage/TOSPage";
import FAQPage from "./components/FAQPage/FAQPage";
import MapPage from "./components/MapPage/MapPage";
import MyAssetsPage from "./components/MyAssetsPage/MyAssetsPage";

import "./App.css";

class App extends Component {
  state = {
    ethereumConnected: "pending",
    ethereum: {
      username: "vena",
      userId: "eb8ab4d26b7625f015d3aa4ab0ea7",
      color: "pink"
    }
  };

  changeConnectStatus(status) {
    this.setState({
      ethereumConnected: status
    });
  }

  changeEthereumDetails(details) {
    this.setState({
      ethereum: {
        ...this.state.ethereum,
        ...details
      }
    });
  }

  componentDidMount() {
    const timerId = setTimeout(() => this.changeConnectStatus("true"), 5000);
  }

  render() {
    const { ethereumConnected, ethereum } = this.state;

    return (
      <div className="App">
        <Header
          connectStatus={ethereumConnected}
          ethereum={ethereum}
          changeEthereumDetails={this.changeEthereumDetails.bind(this)}
        />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/how" component={HowPage} />
        <Route exact path="/tos" component={TOSPage} />
        <Route exact path="/faq" component={FAQPage} />
        <Route
          exact
          path="/dapp"
          component={() => (
            <MapPage connectStatus={ethereumConnected} changeEthereumDetails={this.changeEthereumDetails.bind(this)} />
          )}
        />
        <Route exact path="/myassets" component={() => <MyAssetsPage connectStatus={ethereumConnected} />} />
        <Footer />
      </div>
    );
  }
}

export default App;
