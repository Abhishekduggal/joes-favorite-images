import React from "react";

export default function Images() {
  let mappedImages = props.images.map((e, i) => {
    return (
      <div key={i}>
        <img src={e.source} />
        <h6>{e.name}</h6>
      </div>
    );
  });
  return <div className="images-container">{mappedImages}</div>;
}
