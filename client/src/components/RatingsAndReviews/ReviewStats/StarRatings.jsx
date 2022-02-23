import React from "react";

const StarRatings = (props) => {
  // console.log("StarRatings Ratings Props: ", props);
  const { ratings, productRating } = props;

  // console.log("StarRatings Ratings Props: ", ratings);
  // console.log("StarRatings Star Props: ", props.productRating);
  // console.log("StarRatings Star Props Destructured: ", productRating);
  const oneStarCount = ratings.ratings["1"];
  const twoStarCount = ratings.ratings["2"];
  const threeStarCount = ratings.ratings["3"];
  const fourStarCount = ratings.ratings["4"];
  const fiveStarCount = ratings.ratings["5"];
  let totalStarCount =
    oneStarCount * 1 +
    twoStarCount * 2 +
    threeStarCount * 3 +
    fourStarCount * 4 +
    fiveStarCount * 5;
  let totalRatings =
    oneStarCount +
    twoStarCount +
    threeStarCount +
    fourStarCount +
    fiveStarCount;
  let highestCount = oneStarCount;
  [
    oneStarCount,
    twoStarCount,
    threeStarCount,
    fourStarCount,
    fiveStarCount,
  ].forEach((count) => (count > highestCount ? (highestCount = count) : null));
  // console.log('high count: ', highestCount)
  let totalStarRating = Math.round((totalStarCount / totalRatings) * 100) / 100;
  // console.log(total)
  const fillRating = productRating * 20;
  const unfillRating = productRating * 20 - fillRating;
  // console.log('currentProductRating: ', currentProductRating)
  // const containerStyles = {
  //   height: 5,
  //   width: "140px",
  //   backgroundColor: "#e0e0de",
  //   position: "absolute",
  //   marginTop: "-7.5px",
  //   marginLeft: "30px",
  // };

  return (
    <div>
      <div className="big-star-rating-container">
        <h1 className="big-star-rating">{totalStarRating}</h1>

        <div
          className="review-stats-stars"
          style={{
            backgroundImage: `linear-gradient(90deg, black ${fillRating}%, white ${unfillRating}%)`,
          }}
        >
          ★★★★★
        </div>
        <div className="review-stats-stars-overlay">☆☆☆☆☆</div>
      </div>
      <div style={{ marginBottom: "5px" }}>
        1000% of reviews recommend this product
      </div>

      <div>
        {["5", "4", "3", "2", "1"].map((rating, key) => (
          <Rating
            ratings={ratings}
            rating={rating}
            key={key}
            highestCount={highestCount}
          />
        ))}
      </div>
    </div>
  );
};

const Rating = (props) => {
  const containerStyles = {
    height: 5,
    width: "140px",
    backgroundColor: "#e0e0de",
    position: "absolute",
    marginTop: "-7.5px",
    marginLeft: "30px",
  };
  return (
    <div>
      <div>{props.rating} Stars</div>

      <div style={containerStyles}>
        <div
          style={{
            height: "100%",
            backgroundColor: "#000000",
            width: `${
              (props.ratings.ratings[props.rating] / props.highestCount) * 100
            }%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default StarRatings;
