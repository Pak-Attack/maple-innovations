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
    // console.log("ReviewList Props: ", this.props);
    // console.log("reviewEntries: ", this.props.product.results);
    this.addMoreReviews = this.addMoreReviews.bind(this);
    this.showModalState = this.showModalState.bind(this);
    this.sortEntries = this.sortEntries.bind(this);
  }

  componentDidUpdate() {
    // You don't have to do this check first, but it can help prevent an unneeded render
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

  sortEntries(event) {
    let selectedSortMethod = event.target.value;
    // console.log("selectedSortMethod: ", selectedSortMethod);
    // console.log("sort", this.state.reviewEntries);
    let sortedEntries;

    selectedSortMethod === "Relevant"
      ? (sortedEntries = this.state.reviewEntries.sort(function compare(a, b) {
          if (a.helpfulness * a.date > b.helpfulness * b.date) {
            return -1;
          }
        }))
      : null;
    // selectedSortMethod === "Helpful"
    selectedSortMethod === "Helpful"
      ? (sortedEntries = this.state.reviewEntries.sort(function compare(a, b) {
          // console.log("a", a);
          // console.log("b", b);
          if (a.helpfulness > b.helpfulness) {
            return -1;
          }
        }))
      : null;
    // selectedSortMethod === "Newest"
    selectedSortMethod === "Newest"
      ? (sortedEntries = this.state.reviewEntries.sort(function compare(a, b) {
          // console.log("a", a);
          // console.log("b", b);
          if (a.date > b.date) {
            return -1;
          }
        }))
      : null;

    // console.log("sort2", this.state.reviewEntries);


    this.setState({
      reviewEntries: sortedEntries,
    });
  }

  render() {
    const { reviewCount, showModal, reviewEntries } = this.state;
    // console.log('rerendering')
    // console.log('render reviewEntries: ', this.state.reviewEntries)
    // console.log('reviewEntries props: ', this.props.product.results)

    return (
      <div>
        <div className="review-list-sort">
          {reviewEntries.length} reviews sorted by{""}
          <select
            className="review-sort-select"
            onChange={this.sortEntries}
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
              notHelpfulButtonClickHandler={this.props.notHelpfulButtonClickHandler}
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
            <ReviewModal showModalState={this.showModalState} />
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
