import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Uploader from "./components/Uploader/Uploader";
import Images from "./components/Images/Images";

class App extends Component {
  constructor() {
    super();
    this.state = {
      imageUrl: "",
      header: "Joes Review",
      headerDescription: "React flow, props, and much more!",
      buttonName: "Upload",
      images: []
    };
    this.handleUrl = this.handleUrl.bind(this);
    this.deleteImg = this.deleteImg.bind(this);
  }
  handleUrl(val) {
    let newArr = this.state.images.push(val);
    this.setState({ imageUrl: newArr });
  }
  deleteImg(i) {
    let { images } = this.state;
    images.splice(i, 1);
    this.setState({ images: images });
  }
  render() {
    return (
      <div>
        <Header
          header={this.state.header}
          headerDescription={this.state.headerDescription}
        />
        <Uploader
          buttonName={this.state.buttonName}
          handleUrl={this.handleUrl}
        />
        <Images images={this.state.images} deleteImg={this.deleteImg} />
      </div>
    );
  }
}

export default App;
