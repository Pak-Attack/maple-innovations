import React, { useState, useEffect } from "react";
import axios from "axios";
import ReviewPhoto from "./ReviewPhoto.jsx";
import { Check } from "phosphor-react";

const ReviewListEntry = (props) => {
  const [state, setState] = useState({
    showMoreReview: false,
    productRating: props.productRating,
    review: props.review,
  });

  useEffect(() => {
    if (props.review.helpfulness !== state.review.helpfulness) {
      setState((prev) => {
        return { ...prev, review: props.review };
      });
    }
  }, []);

  function showMoreReview() {
    setState((prev) => {
      return {
        ...prev,
        showMoreReview: true,
      };
    });
  }

  function helpfulButtonClickHandlerSplit(review_id, product_id) {
    if (!props.helpfulnessButtonClicked.includes(review_id)) {
      props.helpfulnessButtonClickedListAdder(review_id);
      props.helpfulButtonClickHandler(review_id, product_id);
    }
  }

  function report(id) {
    axios
      .put(`/reviews/${id}/report`)
      .then(() => {
        props.getReviewData(props.product_id, props.sortMethod);
      })
      .catch((err) => console.error(err));
  }

  let fillRating = props.review.rating * 20;
  let unfillRating = 100 - fillRating;

  if (props.review.rating >= 3) {
    unfillRating = 100 - fillRating;
  } else if (props.review.rating === 2) {
    unfillRating = 100 - fillRating - 40;
  } else {
    unfillRating = 100 - fillRating - 80;
  }

  return (
    <div>
      <div>
        <div className="ratings-and-reviews-entry-boxes">
          <div className="ratings-and-reviews-comments-stars-and-username-line">
            <div className="ratings-and-reviews-entry-box-stars">
              <div
                className="review-list-stars"
                style={{
                  backgroundImage: `linear-gradient(to right, black ${fillRating}%, white ${unfillRating}%)`,
                }}
              >
                ★★★★★
              </div>
              <div className="review-list-stars-overlay">☆☆☆☆☆</div>
            </div>
            <div className="ratings-and-reviews-entry-box-user-and-date">
              {props.review.reviewer_name},{" "}
              {new Date(props.review.date).toLocaleDateString()}{" "}
            </div>
          </div>
          <br />
          <div className="ratings-and-reviews-entry-box-title">
            {props.review.summary.slice(0, 59)}
          </div>
          <br />
          <div className="ratings-and-reviews-entry-box-content-body">
            {props.review.body.length < 250 ? (
              props.review.body
            ) : state.showMoreReview ? (
              props.review.body
            ) : (
              <div>
                <div>{props.review.body.slice(0, 249)}</div>{" "}
                <a
                  style={{
                    textDecoration: "underline",
                    fontWeight: "100",
                  }}
                  onClick={showMoreReview}
                >
                  Show more
                </a>
              </div>
            )}
          </div>
          <br />
          <br />

          <div className="review-photos">
            {props.review.photos.map((photo, key) => (
              <ReviewPhoto
                photo={photo}
                key={key}
                url={props.review.photos.url}
              />
            ))}
          </div>
          <br />
          <br />

          <div className="ratings-and-reviews-entry-box-recommend">
            {props.review.recommend ? (
              <div>
                <div>
                  <Check size={20} />
                </div>
                <div
                  style={{
                    marginLeft: 25,
                    marginTop: -21,
                    fontSize: "1.4rem",
                  }}
                >
                  {" "}
                  I recommend this product
                </div>
              </div>
            ) : null}
          </div>
          <br />

          {props.review.response ? (
            <div className="ratings-and-reviews-entry-box-response-box">
              <div className="ratings-and-reviews-entry-box-response">
                <div>
                  <div>Response:</div>
                  <br />
                  <div>{props.review.response}</div>
                </div>
              </div>
            </div>
          ) : null}

          <div>
            <div
              className="ratings-and-reviews-entry-box-helpful"
              style={{
                fontWeight: "100",
              }}
            >
              Helpful?{" "}
              <a
                style={{
                  textDecoration: "underline",
                }}
                onClick={() =>
                  helpfulButtonClickHandlerSplit(
                    props.review.review_id,
                    props.product_id
                  )
                }
              >
                {" "}
                Yes
              </a>{" "}
              {`(${state.review.helpfulness})`}
              {" | "}
              <a
                style={{
                  textDecoration: "underline",
                }}
                onClick={() => report(state.review.review_id)}
              >
                Report
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewListEntry;
