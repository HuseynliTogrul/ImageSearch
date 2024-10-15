import React from "react";
import "../css/style.css";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <>
        <img
          className="img"
          key={image.id}
          src={image.webformatURL}
          alt="img"
        />
      </>
    );
  });

  return <div className="imgs">{images}</div>;
};

export default ImageList;
