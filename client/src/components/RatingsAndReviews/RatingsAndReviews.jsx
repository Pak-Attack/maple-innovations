import React from "react";
import axios from "axios";
import ReviewStats from "./ReviewStats/ReviewStats.jsx";
import ReviewList from "./ReviewList/ReviewList.jsx";
import ReviewModal from "./ReviewList/ReviewModal/ReviewModal.jsx";

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: false,
      ratings: false,
      currentProductID: this.props.currentProductID,
      productRating: this.props.currentProductRating,
      filteredReviews: null,
      sortMethod: "relevant",
      filterStarsSelected: [],
    };

    this.getReviewData = this.getReviewData.bind(this);
    this.helpfulButtonClickHandler = this.helpfulButtonClickHandler.bind(this);
    this.filterByRating = this.filterByRating.bind(this);
    this.submitNewReview = this.submitNewReview.bind(this);
    this.updateSortMethod = this.updateSortMethod.bind(this);
    this.removeAllFilters = this.removeAllFilters.bind(this);
  }

  componentDidMount() {
    this.getReviewData(this.state.currentProductID, this.state.sortMethod);
  }

  componentDidUpdate() {
    if (this.props.currentProductID !== this.state.currentProductID) {
      this.setState({ currentProductID: this.props.currentProductID });
      this.getReviewData(this.props.currentProductID, this.state.sortMethod);
    }
  }

  updateSortMethod(event) {
    this.setState(
      {
        sortMethod: event.target.value,
      },
      () => {
        this.getReviewData(this.state.currentProductID, this.state.sortMethod);
      }
    );
  }

  getReviewData(id, sort) {
    let request = { params: { sort: sort.toLowerCase() } };
    axios
      .get(`/reviews/${id}`, request)
      .then((results) => {
        if (this.state.filteredReviews) {
          this.setState({
            filteredReviews: results.data.results.filter((review) =>
              this.state.filterStarsSelected.includes(review.rating)
            ),
            product: results.data,
          });
        } else {
          this.setState({
            product: results.data,
          });
        }
      })
      .then(
        axios
          .get(`/reviews/meta/${id}`)
          .then((results) => {
            this.setState({
              ratings: results.data,
            });
          })
          .catch((err) => console.error(err))
      )
      .catch((err) => console.error(err));
  }

  helpfulButtonClickHandler(review_id, product_id) {
    axios
      .put(`/reviews/${review_id}/helpful`)
      .then(() => this.getReviewData(product_id, this.state.sortMethod))
      .catch((err) => console.error(err));
  }

  filterByRating(rating) {
    let filters = this.state.filterStarsSelected;
    if (filters.includes(rating)) {
      filters.splice(filters.indexOf(rating), 1);
    } else {
      filters.push(rating);
    }
    if (filters.length === 0) {
      this.setState({
        filteredReviews: null,
      });
    } else {
      this.setState(
        {
          filterStarsSelected: filters,
        },
        this.setState({
          filteredReviews: this.state.product.results.filter((review) =>
            this.state.filterStarsSelected.includes(review.rating)
          ),
        })
      );
    }
  }

  removeAllFilters() {
    this.setState({
      filteredReviews: null,
      filterStarsSelected: [],
    });
  }

  submitNewReview(form) {
    const data = form;
    data["product_id"] = this.state.currentProductID;
    axios
      .post("/reviews", data)
      .then((results) => {
        this.getReviewData(this.state.currentProductID, this.state.sortMethod);
      })
      .catch((err) => console.err(err));
  }

  render() {
    return (
      <div id="reviews-section-link">
        <h2> Ratings and Reviews </h2>
        <div className="ratings-and-reviews-container">
          <div className="ratings-and-reviews-component-containers">
            {this.state.product && this.state.ratings ? (
              <ReviewStats
                productRating={this.state.productRating}
                ratings={this.state.ratings}
                filterByRating={this.filterByRating}
                removeAllFilters={this.removeAllFilters}
                filterStarsSelected={this.state.filterStarsSelected}
              />
            ) : null}
          </div>
          <div>
            {this.state.product && this.state.ratings ? (
              <ReviewList
                product={
                  this.state.filteredReviews
                    ? this.state.filteredReviews
                    : this.state.product.results
                }
                updateSortMethod={this.updateSortMethod}
                ratings={this.state.ratings}
                submitNewReview={this.submitNewReview}
                product_id={this.state.currentProductID}
                productRating={this.state.productRating}
                helpfulButtonClickHandler={this.helpfulButtonClickHandler}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default RatingsAndReviews;
