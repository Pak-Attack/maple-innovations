import React from 'react';
import StarRatings from './StarRatings.jsx';
import ProductFeedbackScales from './ProductFeedbackScales.jsx';

const ReviewStats = (props) => {
  // console.log('ReviewStats Props: ', ratings);
  const {
    ratings,
    productRating
  } = props;
  return (
    <div>
      <div className="product-data"></div>
      <div>
        <StarRatings
          ratings={ratings}
          productRating={productRating}
        />
        <ProductFeedbackScales />
      </div>
    </div>
  )
}

export default ReviewStats;