import React, { Component } from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import HowPage from "./components/HowPage/HowPage";
import TOSPage from "./components/TOSPage/TOSPage";
import FAQPage from "./components/FAQPage/FAQPage";
import MapPage from "./components/MapPage/MapPage";

import "./App.css";

class App extends Component {
  state = {
    ethereumConnected: false,
    ethereumId: "XLRFC5"
  };

  changeConnectStatus(status) {
    this.setState({
      ethereumConnected: status
    });
  }

  changeEthereumId(id) {
    this.setState({
      ethereumId: id
    });
  }

  render() {
    const { ethereumConnected, ethereumId } = this.state;

    setTimeout(() => this.changeConnectStatus(true), 5000);
    return (
      <div className="App">
        <Header
          connectStatus={ethereumConnected}
          ethereumId={ethereumId}
          changeEthereumId={this.changeEthereumId.bind(this)}
        />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/how" component={HowPage} />
        <Route exact path="/tos" component={TOSPage} />
        <Route exact path="/faq" component={FAQPage} />
        <Route exact path="/dapp" component={MapPage} />
        <Footer />
      </div>
    );
  }
}

export default App;
