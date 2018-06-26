import React from "react";

export default function Header() {
  return (
    <div className="header-container">
      <h1>{props.header}</h1>
      <p>{props.headerDescription}</p>
    </div>
  );
}
