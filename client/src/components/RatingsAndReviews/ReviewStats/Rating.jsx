import React from "react";

const Rating = (props) => {
  const containerStyles = {
    height: 5,
    width: "140px",
    backgroundColor: "#e0e0de",
    marginTop: "-10px",
    marginLeft: "50px",
  };
  return (
    <div>
      <div style={{ fontSize: "1.4rem", textDecoration: "underline" }}>
        <div
          onClick={() => {
            props.filterByRating(props.rating);
          }}
        >
          {props.rating} Stars
        </div>
      </div>

      <div style={containerStyles}>
        <div
          style={{
            height: "100%",
            backgroundColor: "green",
            width: `${
              (props.ratings.ratings[props.rating] / props.totalRatings) * 100
            }%`,
          }}
        ></div>
      </div>
      <br />
    </div>
  );
};

export default Rating;
