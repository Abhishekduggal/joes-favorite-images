import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="header-container column-center-all">
      <h1>{props.header}</h1>
      <p>{props.headerDescription}</p>
    </div>
  );
}
