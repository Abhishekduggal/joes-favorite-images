import React from "react";

export default function Uploader() {
  return (
    <div>
      <input placeholder="enter image URL" />
      <button onClick={this.handleUrl}>{this.props.buttonName}</button>
    </div>
  );
}
