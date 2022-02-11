import React from 'react';
import StarRatings from './StarRatings.jsx';
import ProductFeedbackScales from './ProductFeedbackScales.jsx';

const ReviewStats = ({ratings}) => {
  console.log('ReviewStats Props: ', ratings);
  return (
    <div>
      <div className="product-data"></div>
      <div>
        <StarRatings ratings={ratings}/>
        <ProductFeedbackScales />
      </div>
    </div>
  )
}

export default ReviewStats;