import React from "react";
import StarRatings from "./StarRatings.jsx";
import ProductFeedbackScales from "./ProductFeedbackScales.jsx";

const ReviewStats = (props) => {
  const {
    ratings,
    productRating,
    filterByRating,
    removeAllFilters,
    filterStarsSelected,
  } = props;
  return (
    <div>
      <div className="product-data"></div>
      <div>
        <StarRatings
          ratings={ratings}
          productRating={productRating}
          filterByRating={filterByRating}
          removeAllFilters={removeAllFilters}
          filterStarsSelected={filterStarsSelected}
        />
        <br />
        <ProductFeedbackScales
          ratings={ratings}
          productRating={productRating}
        />
      </div>
    </div>
  );
};

export default ReviewStats;
