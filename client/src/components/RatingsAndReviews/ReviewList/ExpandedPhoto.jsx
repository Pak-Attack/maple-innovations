import React from "react";

const ExpandedPhoto = (props) => {
  return (
    <div
      style={{
        position: "fixed",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        className="individual-review-photos"
        src={props.photo}
        onClick={props.toggleImage}
        style={{
          maxWidth: "50%",
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </div>
  );
};

export default ExpandedPhoto;
