import React, { useState } from "react";
import ExpandedPhoto from "./ExpandedPhoto.jsx";

const ReviewPhoto = (props) => {
  const [state, setState] = useState({ showExpandedImage: false });

  const toggleImage = (e) => {
    (e) => e.stopPropagation();
    setState((prev) => {
      showExpandedImage: !showExpandedImage;
    });
  };

  return (
    <div>
      <div>
        <img
          className="individual-review-photos"
          src={props.photo.url}
          style={{
            maxHeight: "70px",
            width: "auto",
          }}
          onClick={toggleImage}
        />
      </div>
      {showExpandedImage ? (
        <ExpandedPhoto photo={props.photo.url} toggleImage={toggleImage} />
      ) : null}
    </div>
  );
};

export default ReviewPhoto;
