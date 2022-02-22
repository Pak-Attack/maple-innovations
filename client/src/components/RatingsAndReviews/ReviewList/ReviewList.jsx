import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';
import ReviewModal from './ReviewModal/ReviewModal.jsx';

  class ReviewList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        reviewCount: 2,
        showModal: false
      }

    // console.log('ReviewList Props: ', this.props);
    this.addMoreReviews = this.addMoreReviews.bind(this);
    this.showModalState = this.showModalState.bind(this);
  }

  addMoreReviews() {
    this.setState({
      reviewCount: this.state.reviewCount += 2
    })
  }

  showModalState() {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  render() {
    const {reviewCount, showModal} = this.state
    return (
      <div>
        <div className="review-list-sort">
          {this.props.product.results.length} reviews sorted by XXXXX
        </div>
        <div>
          {this.props.product.results.slice(0, reviewCount).map((review, key) => (
            <ReviewListEntry
              review={review}
              key={key}
              productRating={this.props.productRating}
            />
          ))}
        </div>
        <div>
          {(this.props.product.results.length < 2 && this.props.product.results.length !== 0) || this.props.product.results.length >= reviewCount ? (<button onClick={this.addMoreReviews}>More+</button>) : null}
          <div className="review-list-show-modal-button">
            <button onClick={this.showModalState}>Add New Review</button>
            {showModal ? (<ReviewModal showModalState={this.showModalState}/>) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewList;