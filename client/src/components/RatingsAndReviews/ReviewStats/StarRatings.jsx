import React from "react";
import Rating from "./Rating.jsx";

const StarRatings = (props) => {
  const { ratings, productRating, filterByRating } = props;

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
  let totalStarRating = (totalStarCount / totalRatings).toFixed(1);

  const fillRating = totalStarRating * 20;
  const unfillRating = totalStarRating * 20 - fillRating;

  let totalRecommendedCount =
    Number(ratings.recommended.true) /
    (Number(ratings.recommended.true) + Number(ratings.recommended.false));

  let starsSelected;
  props.filterStarsSelected
    ? (starsSelected = `${props.filterStarsSelected[0]}`)
    : null;

  let result = "";
  if (props.filterStarsSelected) {
    let starsSelected = props.filterStarsSelected.sort();
    for (let i = 0; i < starsSelected.length; i++) {
      result += starsSelected[i];
      if (i + 1 !== starsSelected.length) {
        result += ", ";
      }
    }
  }

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
        {(totalRecommendedCount * 100).toFixed()}% of reviews recommend this
        product
      </div>
      {result ? (
        <div>
          <div>
            <div style={{ marginBottom: "5px" }}>Filters applied: {result}</div>

            <a
              style={{
                textDecoration: "underline",
                fontWeight: "100",
                marginBottom: "10px",
              }}
              onClick={props.removeAllFilters}
            >
              Remove All Filters
            </a>
          </div>
          <br />
        </div>
      ) : null}

      <div>
        {[5, 4, 3, 2, 1].map((rating, key) => (
          <Rating
            ratings={ratings}
            rating={rating}
            key={key}
            totalRatings={totalRatings}
            filterByRating={filterByRating}
            highestCount={highestCount}
          />
        ))}
      </div>
    </div>
  );
};

export default StarRatings;
