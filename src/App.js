import React, { Component } from "react";
import "./App.css";
//import the components: Header, Uploader, & Images

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
  }
  /*
    1) Create and bind a method called 'addUrl' adds the
        url parameter to images array
    2) Create and bind a method called 'deleteImg' that 
        removes an element from the images array based
        on the index parameter passed to it.
  */
  render() {
    return (
      <div>
        {/*
            1) Render Header passing the following props: header & headerDescription
            2) Render Uploader passing the following props: buttonName & handleUrl
            3) Render Images passing the following props: images & deleteImg
        */}
      </div>
    );
  }
}

export default App;
