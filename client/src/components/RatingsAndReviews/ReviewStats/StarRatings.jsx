import React from 'react';

const StarRatings = ({ratings}) => {
  console.log('StarRatings Props: ', ratings);
  let totalStars = ratings.ratings["1"] * 1 + ratings.ratings["2"] * 2 + ratings.ratings["3"] * 3 + ratings.ratings["4"] * 4 + ratings.ratings["5"] * 5
  let totalRatings = (ratings.ratings["1"]) + (ratings.ratings["2"]) + (ratings.ratings["3"]) + (ratings.ratings["4"]) + (ratings.ratings["5"]);
  let total = Math.round(totalStars / totalRatings * 100) / 100;
  console.log(total)
  return (
    <div>
      <div className="big-star-rating-container">
        <h1 className="big-star-rating">{total}</h1>
        {/* <div>XXXXX</div> */}
      </div>
      <div>1000% of reviews recommend this product</div>
      <div>
        <div>5 stars ------------</div>
        <div>4 stars ------------</div>
        <div>3 stars ------------</div>
        <div>2 stars ------------</div>
        <div>1 stars ------------</div>
      </div>

    </div>
  )
}

export default StarRatings;