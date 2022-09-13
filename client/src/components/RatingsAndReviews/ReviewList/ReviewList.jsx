import React, { useState, useEffect } from "react";
import ReviewListEntry from "./ReviewListEntry.jsx";
import ReviewModal from "./ReviewModal/ReviewModal.jsx";

const ReviewList = (props) => {
  const [state, setState] = useState({
    reviewCount: 2,
    showModal: false,
    reviewEntries: props.product,
    helpfulnessButtonClicked: [],
  });

  useEffect(() => {
    if (props.product !== state.reviewEntries) {
      setState((prev) => {
        return { ...prev, reviewEntries: props.product };
      });
    }
  });

  function addMoreReviews() {
    setState((prev) => {
      return { ...prev, reviewCount: (state.reviewCount += 2) };
    });
  }

  function showModalState() {
    setState((prev) => {
      return { ...prev, showModal: !state.showModal };
    });
  }

  function helpfulnessButtonClickedListAdder(id) {
    let helpfulnessButtonClicked = state.helpfulnessButtonClicked;
    helpfulnessButtonClicked.push(id);
    setState((prev) => {
      return { ...prev, helpfulnessButtonClicked: helpfulnessButtonClicked };
    });
  }

  const { reviewCount, showModal, reviewEntries } = state;
  return (
    <div>
      <div className="review-list-sort">
        {reviewEntries.length} reviews sorted by{""}
        <select
          className="review-sort-select"
          onChange={props.updateSortMethod}
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
            getReviewData={props.getReviewData}
            sortMethod={props.sortMethod}
            product_id={props.product_id}
            productRating={props.productRating}
            helpfulButtonClickHandler={props.helpfulButtonClickHandler}
            helpfulnessButtonClicked={state.helpfulnessButtonClicked}
            helpfulnessButtonClickedListAdder={
              helpfulnessButtonClickedListAdder
            }
          />
        ))}
      </div>
      <div className="review-buttons-collection">
        {(props.product.length < 2 && state.reviewEntries.length !== 0) ||
        reviewEntries.length >= state.reviewCount ? (
          <button className="review-buttons" onClick={addMoreReviews}>
            More Reviews
          </button>
        ) : null}
        <button className="review-buttons" onClick={showModalState}>
          Add New Review
        </button>
        {showModal ? (
          <ReviewModal
            showModalState={showModalState}
            submitNewReview={props.submitNewReview}
            ratings={props.ratings}
          />
        ) : null}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default ReviewList;
