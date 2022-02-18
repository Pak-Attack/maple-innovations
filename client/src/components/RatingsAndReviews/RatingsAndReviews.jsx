// Austin

import React from 'react';
import ReviewStats from './ReviewStats/ReviewStats.jsx';
import ReviewList from './ReviewList/ReviewList.jsx';
import sample_data from './sample_ratings_data.js';
import meta_data from './meta_data.js';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: sample_data,
      ratings: meta_data
    }

    // console.log('RatingsAndReviews Main Props (should be empty): ', props)
    // console.log('sample_data: ', this.state.product);
  }

  render() {
    return (
      <div>
        <h2> Ratings and Reviews </h2>
        <div className="ratings-and-reviews-container">
          <div className="ratings-and-reviews-component-containers" >
            <ReviewStats ratings={this.state.ratings}/>
          </div>
          <div>
            <ReviewList product={this.state.product} />
          </div>
        </div>
      </div>
    )
  }
}

export default RatingsAndReviews;