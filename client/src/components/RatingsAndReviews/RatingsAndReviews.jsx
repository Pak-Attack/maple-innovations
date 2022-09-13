import React, {useState, useEffect} from "react";
import axios from "axios";
import ReviewStats from "./ReviewStats/ReviewStats.jsx";
import ReviewList from "./ReviewList/ReviewList.jsx";
import ReviewModal from "./ReviewList/ReviewModal/ReviewModal.jsx";

const RatingsAndReviews = (props) => {
  const [state, setState] = useState({
    product: false,
    ratings: false,
    currentProductID: props.currentProductID,
    productRating: props.currentProductRating,
    filteredReviews: null,
    sortMethod: "relevant",
    filterStarsSelected: [],
  })

  useEffect(() => getReviewData(state.currentProductID, state.sortMethod), [])

  useEffect(() => {
    if (props.currentProductID !== state.currentProductID) {
      setState(prev => { return {
        ...prev,
        currentProductID: props.currentProductID
      }})
      getReviewData(props.currentProductID, state.sortMethod);
    }
  })

  function updateSortMethod(event) {
    let sortType = event.target.value
    setState(prev => { return {
      ...prev,
      sortMethod: sortType
    }})
    getReviewData(currentProductID, sortType);
  }

  function getReviewData(id, sort) {
    let request = { params: { sort: sort.toLowerCase() } };
    axios
      .get(`/reviews/${id}`, request)
      .then((results) => {
        // console.log('results', results)
        if (state.filteredReviews) {

          setState(prev => { return {
            ...prev,
            filteredReviews: results.data.filter((review) =>
            state.filterStarsSelected.includes(review.rating)),
            product: results.data
          }})
        } else {
          // console.log('here')

          setState(prev => { return {
            ...prev,
            product: results.data
          }})
        }
      })
      .then(
        axios
          .get(`/reviews/meta/${id}`)
          .then((results) => {
            // console.log('data2', results.data)
            setState(prev => { return {
              ...prev,
              ratings: results.data
            }})
          })
          .catch((err) => console.error(err))
      )
      .catch((err) => console.error(err));
  }

  function helpfulButtonClickHandler(review_id, product_id) {
    axios
      .put(`/reviews/${review_id}/helpful`)
      .then(() => getReviewData(product_id, state.sortMethod))
      .catch((err) => console.error(err));
  }

  function filterByRating(rating) {
    let filters = state.filterStarsSelected;
    if (filters.includes(rating)) {
      filters.splice(filters.indexOf(rating), 1);
    } else {
      filters.push(rating);
    }
    if (filters.length === 0) {
      setState(prev => { return {
        ...prev,
        filteredReviews: null
      }})
    } else {
      setState(prev => { return {
        ...prev,
        filteredReviews: state.results.data.filter((review) =>
        state.filterStarsSelected.includes(review.rating)),
        filterStarsSelected: state.filters
      }})
    }
  }

  function removeAllFilters() {
    setState(prev => { return {
      ...prev,
      filteredReviews: null,
      filterStarsSelected: []
    }})
  }

  function submitNewReview(form) {
    const data = form;
    data["product_id"] = state.currentProductID;
    axios
      .post("/reviews", data)
      .then((results) => {
        getReviewData(state.currentProductID, state.sortMethod);
      })
      .catch((err) => console.error(err));
  }

    return (
      <div id="reviews-section-link">
        <h1 style={{ marginLeft: "4%", color: '#3A3B3C' }}> Ratings and Reviews </h1>
        <br />
        <br />
        <div className="ratings-and-reviews-container">
          <div className="ratings-and-reviews-component-containers">
            {state.product && state.ratings ? (
              <ReviewStats
                productRating={state.productRating}
                ratings={state.ratings}
                filterByRating={filterByRating}
                removeAllFilters={removeAllFilters}
                filterStarsSelected={state.filterStarsSelected}
              />
            ) : null}
          </div>
          <div>
            {state.product && state.ratings ? (
              <ReviewList
                product={
                  state.filteredReviews
                    ? state.filteredReviews
                    : state.product
                }
                getReviewData={getReviewData}
                sortMethod={state.sortMethod}
                updateSortMethod={updateSortMethod}
                ratings={state.ratings}
                submitNewReview={submitNewReview}
                product_id={state.currentProductID}
                productRating={state.productRating}
                helpfulButtonClickHandler={helpfulButtonClickHandler}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
}

export default RatingsAndReviews;