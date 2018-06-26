import React from "react";
import "./Images.css";

export default function Images(props) {
  let mappedImages = props.images.map((e, i) => {
    return (
      <div key={i} className="image-box column-center-all">
        <img src={e} width={"200px"} />
        <button onClick={() => props.deleteImg(i)}>delete</button>
      </div>
    );
  });
  return <div className="images-container flex-flow">{mappedImages}</div>;
}
