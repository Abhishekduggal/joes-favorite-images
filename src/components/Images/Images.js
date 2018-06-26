import React from "react";
import "./Images.css";

export default function Images(props) {
  let mappedImages = props.images.map((e, i) => {
    return (
      <div key={i} className="image-box column-center-all">
        {/*
        1) Create an img tag with a src attribute and a width of 200px
        2) Create a button with an that invokes the method deleteImg on click,
            passing the image's index as a parameter
        */}
      </div>
    );
  });
  return <div className="images-container flex-flow">{mappedImages}</div>;
}
