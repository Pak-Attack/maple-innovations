import React from "react";
import ReviewListEntry from "./ReviewListEntry.jsx";
import ReviewModal from "./ReviewModal/ReviewModal.jsx";

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewCount: 2,
      showModal: false,
      reviewEntries: this.props.product,
    };

    this.addMoreReviews = this.addMoreReviews.bind(this);
    this.showModalState = this.showModalState.bind(this);
  }

  componentDidUpdate() {
    if (this.props.product !== this.state.reviewEntries) {
      this.setState({ reviewEntries: this.props.product });
    }
  }

  addMoreReviews() {
    this.setState({
      reviewCount: (this.state.reviewCount += 2),
    });
  }

  showModalState() {
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  render() {
    const { reviewCount, showModal, reviewEntries } = this.state;
    return (
      <div>
        <div className="review-list-sort">
          {reviewEntries.length} reviews sorted by{""}
          <select
            className="review-sort-select"
            onChange={this.props.updateSortMethod}
            name="sortOn"
          >
            <option defaultValue>Relevant</option>
            <option>Helpful</option>
            <option>Newest</option>
          </select>
        </div>
        <br />
        <div style={{ maxHeight: "700px", overflowY: "scroll" }}>
          {reviewEntries.slice(0, reviewCount).map((review, key) => (
            <ReviewListEntry
              review={review}
              key={key}
              product_id={this.props.product_id}
              productRating={this.props.productRating}
              helpfulButtonClickHandler={this.props.helpfulButtonClickHandler}
              notHelpfulButtonClickHandler={
                this.props.notHelpfulButtonClickHandler
              }
            />
          ))}
        </div>
        <div className="review-buttons-collection">
          {(this.props.product.length < 2 &&
            this.state.reviewEntries.length !== 0) ||
          reviewEntries.length >= this.state.reviewCount ? (
            <button className="review-buttons" onClick={this.addMoreReviews}>
              More Reviews
            </button>
          ) : null}
          <button className="review-buttons" onClick={this.showModalState}>
            Add New Review
          </button>
          {showModal ? (
            <ReviewModal
              showModalState={this.showModalState}
              submitNewReview={this.props.submitNewReview}
              ratings={this.props.ratings}
            />
          ) : null}
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default ReviewList;
