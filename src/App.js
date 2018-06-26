import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Uploader from "./components/Uploader/Uploader";
import Images from "./components/Images/Images";

class App extends Component {
  constructor() {
    super();
    this.state = {
      imageUrl: ""
    };
    this.handleUrl = this.handleUrl.bind(this);
  }
  handleUrl(e) {
    this.setState({ imageUrl: e.target.value });
  }
  render() {
    return (
      <div>
        <Header />
        <Uploader handleUrl={this.handleUrl} />
        <Images />
      </div>
    );
  }
}

export default App;
