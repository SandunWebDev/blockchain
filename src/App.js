import React, { Component } from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import HowPage from "./components/HowPage/HowPage";
import TOSPage from "./components/TOSPage/TOSPage";
import FAQPage from "./components/FAQPage/FAQPage";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/how" component={HowPage} />
        <Route exact path="/tos" component={TOSPage} />
        <Route exact path="/faq" component={FAQPage} />
        <Footer />
      </div>
    );
  }
}

export default App;
