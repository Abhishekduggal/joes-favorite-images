import React, { Component } from "react";
import "./Uploader.css";

export default class Uploader extends Component {
  constructor(props) {
    super();
    this.state = {
      url: ""
    };
  }
  handleInput(val) {
    this.setState({ url: val });
  }
  render() {
    return (
      <div className="upload-container column-center-all">
        <input
          onChange={e => this.handleInput(e.target.value)}
          placeholder="enter image URL"
        />
        <button
          onClick={() => this.props.handleUrl(this.state.url)}
          className="primary"
        >
          Upload
        </button>
      </div>
    );
  }
}
