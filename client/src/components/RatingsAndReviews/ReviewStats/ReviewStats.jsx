import React from 'react';
import StarRatings from './StarRatings.jsx';
import ProductFeedbackScales from './ProductFeedbackScales.jsx';

const ReviewStats = (props) => {
  // console.log('ReviewStats Props: ', props);
  const {
    ratings,
    productRating,
    filterByRating
  } = props;
  return (
    <div>
      <div className="product-data"></div>
      <div>
        <StarRatings
          ratings={ratings}
          productRating={productRating}
          filterByRating={filterByRating}
        />
        <br />
        <ProductFeedbackScales
          ratings={ratings}
          productRating={productRating}
        />
      </div>
    </div>
  )
}

export default ReviewStats;