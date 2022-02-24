import React from "react";

const StarRatings = (props) => {
  // console.log("StarRatings Ratings Props: ", props);
  const { ratings, productRating, filterByRating } = props;

  // console.log("StarRatings Ratings Props: ", ratings);
  // console.log("StarRatings Star Props: ", props.productRating);
  // console.log("StarRatings Star Props Destructured: ", productRating);
  let oneStarCount = ratings.ratings["1"];
  let twoStarCount = ratings.ratings["2"];
  let threeStarCount = ratings.ratings["3"];
  let fourStarCount = ratings.ratings["4"];
  let fiveStarCount = ratings.ratings["5"];
  oneStarCount ? (oneStarCount = ratings.ratings["1"]) : (oneStarCount = 0);
  twoStarCount ? (twoStarCount = ratings.ratings["2"]) : (twoStarCount = 0);
  threeStarCount
    ? (threeStarCount = ratings.ratings["3"])
    : (threeStarCount = 0);
  fourStarCount ? (fourStarCount = ratings.ratings["4"]) : (fourStarCount = 0);
  fiveStarCount ? (fiveStarCount = ratings.ratings["5"]) : (fiveStarCount = 0);
  let totalStarCount =
    oneStarCount * 1 +
    twoStarCount * 2 +
    threeStarCount * 3 +
    fourStarCount * 4 +
    fiveStarCount * 5;
  let totalRatings =
    oneStarCount * 1 +
    twoStarCount * 1 +
    threeStarCount * 1 +
    fourStarCount * 1 +
    fiveStarCount * 1;
  let highestCount = oneStarCount;
  [
    oneStarCount,
    twoStarCount,
    threeStarCount,
    fourStarCount,
    fiveStarCount,
  ].forEach((count) => (count > highestCount ? (highestCount = count) : null));
  // console.log("high count: ", highestCount);
  // let totalStarRating = Math.round((totalStarCount / totalRatings) * 10) / 10;
  let totalStarRating = (totalStarCount / totalRatings).toFixed(1);

  // console.log("totalStarCount", totalStarCount);
  // console.log("totalRatings", totalRatings);

  // console.log("totalStarRating", totalStarRating);
  const fillRating = totalStarRating * 20;
  // console.log('fillRating: ', fillRating)
  const unfillRating = totalStarRating * 20 - fillRating;
  // console.log('unfillRating: ', unfillRating)

  // console.log('currentProductRating: ', currentProductRating)
  // const containerStyles = {
  //   height: 5,
  //   width: "140px",
  //   backgroundColor: "#e0e0de",
  //   position: "absolute",
  //   marginTop: "-7.5px",
  //   marginLeft: "30px",
  // };

  let totalRecommendedCount = Number(ratings.recommended.true) / (Number(ratings.recommended.true) + Number(ratings.recommended.false))
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
      <div style={{ marginBottom: "5px" }}>Review Count: {totalRatings}</div>
      <div style={{ marginBottom: "5px" }}>
        {(totalRecommendedCount *100 ).toFixed()}% of reviews recommend this product
      </div>

      <div>
        {[5, 4, 3, 2, 1].map((rating, key) => (
          <Rating
            ratings={ratings}
            rating={rating}
            key={key}
            totalRatings={totalRatings}
            filterByRating={filterByRating}
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
    // position: "absolute",
    marginTop: "-10px",
    marginLeft: "50px",
  };
  return (
    <div>
      <div style={{ fontSize: "1.4rem", textDecoration: "underline" }}>
        <div
          /*value={`${props.rating} Stars`}*/
          // event.target.innerHTML
          onClick={() => props.filterByRating(props.rating)}
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

export default StarRatings;
