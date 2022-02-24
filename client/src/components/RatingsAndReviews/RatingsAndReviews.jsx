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
      product: false,
      ratings: false,
      // currentProduct: this.props.currentProduct,
      currentProductID: this.props.currentProductID,
      productRating: this.props.currentProductRating,
      filteredReviews: null,

    };
    // console.log("currentProduct: ", this.props.currentProduct);
    // console.log("product: ", this.props.product);

    // console.log("currentProduct ID: ", this.props.currentProduct.id);
    // console.log("RatingsAndReviews Props: ", this.props);

    this.getReviewData = this.getReviewData.bind(this);
    this.checkState = this.checkState.bind(this);
    this.helpfulButtonClickHandler = this.helpfulButtonClickHandler.bind(this);
    // this.updateHelpfulnessCount = this.updateHelpfulnessCount.bind(this);
    this.notHelpfulButtonClickHandler =
      this.notHelpfulButtonClickHandler.bind(this);
    this.filterByRating = this.filterByRating.bind(this);

    // console.log('star rating: ', this.props.currentProductRating)

    // console.log('RatingsAndReviews Main Props (should be empty): ', props)
    // console.log('sample_data: ', this.state.product);
  }

  componentDidMount() {
    this.getReviewData(this.state.currentProductID);
  }

  componentDidUpdate() {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (this.props.currentProductID !== this.state.currentProductID) {
      this.setState({ currentProductID: this.props.currentProductID });
      this.getReviewData(this.state.currentProductID);
    }
  }

  checkState() {
    console.log("state: ", this.state);
  }

  getReviewData(id) {
    axios
      .get(`/reviews/${id}`)
      .then((results) => {
        // console.log("axios get results: ", results);
        this.setState(
          {
            product: results.data,
          }
          // () => console.log("state updated in 1st get request")
        );
      })
      .then(
        axios.get(`/reviews/meta/${id}`).then((results) => {
          // console.log("axios get meta results: ", results);
          this.setState(
            {
              ratings: results.data,
            }
            // () => console.log("state updated in 2nd get request")
          );
        })
      );
  }

  helpfulButtonClickHandler(review_id, product_id) {
    console.log("helpful button clicked: ", review_id);
    // this.updateHelpfulnessCount(review_id);
    axios.put(`/reviews/${review_id}/helpful`)
      .then(
        () => this.getReviewData(product_id))
  }

  updateHelpfulnessCount(review_id) {
    console.log("helpful button clicked");
  }

  notHelpfulButtonClickHandler(review_id) {
    console.log("not helpful button clicked: ", review_id);
  }

  filterByRating(rating) {
    this.setState({
      filteredReviews: this.state.product.results.filter(
        (review) => review.rating === rating
      ),
    });
  }

  render() {
    // console.log("render product: ", this.state.product);
    // console.log('star rating in top ratings and reviews section: ', this.state.productRating)
    return (
      <div>
        <h2> Ratings and Reviews </h2>
        <button onClick={this.checkState}>check state</button>
        <div className="ratings-and-reviews-container">
          <div className="ratings-and-reviews-component-containers">
            {this.state.product && this.state.ratings ? (
              <ReviewStats
                productRating={this.state.productRating}
                ratings={this.state.ratings}
                filterByRating={this.filterByRating}
              />
            ) : null}
          </div>
          <div>
            {this.state.product && this.state.ratings ? (
              <ReviewList
                // filteredReviews={this.state.filteredReviews}
                product={
                  this.state.filteredReviews
                    ? this.state.filteredReviews
                    : this.state.product.results
                }
                product_id={this.state.currentProductID}
                productRating={this.state.productRating}
                helpfulButtonClickHandler={this.helpfulButtonClickHandler}
                notHelpfulButtonClickHandler={this.notHelpfulButtonClickHandler}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default RatingsAndReviews;
