import React, { Component } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HomePage />
        <Footer />
      </div>
    );
  }
}

export default App;
