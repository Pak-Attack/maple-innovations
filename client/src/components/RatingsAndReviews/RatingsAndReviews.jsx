// Austin

import React from "react";
import axios from "axios";
import ReviewStats from "./ReviewStats/ReviewStats.jsx";
import ReviewList from "./ReviewList/ReviewList.jsx";
import sample_data from "./sample_ratings_data.js";
import meta_data from "./meta_data.js";

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: sample_data,
      ratings: meta_data,
      // product: [],
      // ratings: [],
      productRating: this.props.currentProductRating,
      product_id: this.props.currentProduct.id,
    };
    // console.log("currentProduct: ", this.props.currentProduct);
    // console.log("currentProduct ID: ", this.props.currentProduct.id);

    this.getReviewData = this.getReviewData.bind(this);
    this.checkState = this.checkState.bind(this);

    // console.log('star rating: ', this.props.currentProductRating)

    // console.log('RatingsAndReviews Main Props (should be empty): ', props)
    // console.log('sample_data: ', this.state.product);
  }

  componentDidMount() {
    this.getReviewData();
  }

  checkState() {
    console.log("state: ", this.state);
  }

  getReviewData() {
    axios.get("/reviews/").then((results) => {
      // console.log("axios get results: ", results);
      this.setState(
        {
          product: results.data,
        },
        // () => console.log("state updated in 1st get request")
      );
    });
    axios.get("/reviews/meta/").then((results) => {
      // console.log("axios get meta results: ", results);
      this.setState(
        {
          ratings: results.data,
        },
        // () => console.log("state updated in 2nd get request")
      );
    });
  }

  render() {
    // console.log('star rating in top ratings and reviews section: ', this.state.productRating)
    return (
      <div>
        <h2> Ratings and Reviews </h2>
        <button onClick={this.checkState}>check state</button>
        <div className="ratings-and-reviews-container">


              <div className="ratings-and-reviews-component-containers">
                <ReviewStats
                  productRating={this.state.productRating}
                  ratings={this.state.ratings}
                />
              </div>
              <div>
                <ReviewList
                  product={this.state.product}
                  productRating={this.state.productRating}
                />
              </div>


        </div>
      </div>
    );
  }
}

export default RatingsAndReviews;
