import React, { useState } from "react";
import NewStarRating from "./NewStarRating.jsx";
import Characteristics from "./Characteristics.jsx";

const ReviewModal = (props) => {
  const [state, setState] = useState({
    starRatingSelected: null,
    recommendationSelected: null,
    sizeSelected: 0,
    widthSelected: 0,
    comfortSelected: 0,
    qualitySelected: 0,
    lengthSelected: 0,
    fitSelected: 0,
    reviewSummaryValue: "",
    reviewBodyValue: "",
    usernameValue: "",
    emailValue: "",
    urlCount: 0,
    urlValue1: "",
    urlValue2: "",
    urlValue3: "",
    urlValue4: "",
    urlValue5: "",
    showUrlUpload: false,
    reviewSummaryValueValid: false,
    reviewBodyValueValid: false,
    usernameValueValid: false,
    emailValueValid: false,
    reviewBodyCharacters: 0,
  });

  function updateStarRating(input) {
    console.log("called", input);
    // setStarRatingSelected((old) => input);
    setState((prev) => {
      return {
        ...prev,
        starRatingSelected: input,
      };
    });
  }

  function handleReviewFormSubmit() {
    // event.preventDefault();
    let characteristics = {};
    let size, width, comfort, quality, length, fit;

    props.ratings.characteristics.Size
      ? (characteristics[props.ratings.characteristics.Size.id] = sizeSelected)
      : null;
    props.ratings.characteristics.Width
      ? (characteristics[props.ratings.characteristics.Width.id] =
          widthSelected)
      : null;
    props.ratings.characteristics.Comfort
      ? (characteristics[props.ratings.characteristics.Comfort.id] =
          comfortSelected)
      : null;
    props.ratings.characteristics.Quality
      ? (characteristics[props.ratings.characteristics.Quality.id] =
          qualitySelected)
      : null;
    props.ratings.characteristics.Length
      ? (characteristics[props.ratings.characteristics.Length.id] =
          lengthSelected)
      : null;
    props.ratings.characteristics.Fit
      ? (characteristics[props.ratings.characteristics.Fit.id] = fitSelected)
      : null;

    const review = {
      rating: starRatingSelected,
      recommend: recommendationSelected,
      photos: [],
      characteristics: characteristics,

      summary: reviewSummaryValue,
      body: reviewBodyValue,
      name: usernameValue,
      email: emailValue,
    };

    const urlStates = [urlValue1, urlValue2, urlValue3, urlValue4, urlValue5];
    review.photos = urlStates.filter((url) => url.length > 0);

    props.submitNewReview(review);

    props.showModalState();

    setState((prev) => {
      return {
        starRatingSelected: null,
        recommendationSelected: null,
        sizeSelected: 0,
        widthSelected: 0,
        comfortSelected: 0,
        qualitySelected: 0,
        lengthSelected: 0,
        fitSelected: 0,
        reviewSummaryValue: "",
        reviewBodyValue: "",
        usernameValue: "",
        emailValue: "",
        urlCount: 0,
        urlValue1: "",
        urlValue2: "",
        urlValue3: "",
        urlValue4: "",
        urlValue5: "",
        showUrlUpload: false,
        reviewSummaryValueValid: false,
        reviewBodyValueValid: false,
        usernameValueValid: false,
        emailValueValid: false,
        reviewBodyCharacters: 0,
      };
    });
  }

  function updateFormState(name, name2) {
    let value = event.target.value;
    console.log("name", name);
    console.log("value", value);
    console.log("object", { [name]: value });
    if (name2) {
      setState((prev) => {
        return {
          ...prev,
          [name]: value,
          [name2]: value.length,
        };
      });
    } else {
      setState((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    }
  }

  function showUrlUploadToggle() {
    setState((prev) => {
      return {
        ...prev,
        showUrlUpload: true,
      };
    });
  }

  function showOneMoreUrlBox() {
    event.preventDefault();
    setState((prev) => {
      return {
        ...prev,
        urlCount: prev.urlCount + 1,
      };
    });
  }

  return (
    <div className="review-modal">
      <div
        className="review-modal-content"
        // onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: "700px", overflowY: "scroll" }}
      >
        <div className="review-modal-header">
          <h2 className="review-modal-title">Write Your Review</h2>
        </div>
        <div className="review-modal-body">
          <form onSubmit={handleReviewFormSubmit}>
            <div>
              <NewStarRating selectStarRating={updateStarRating} />
            </div>
            <br />
            <div>
              Do you recommend this product?
              <div className="recommendation-radio">
                <label>
                  <input
                    type="radio"
                    value={true}
                    onChange={() => updateFormState("recommendationSelected")}
                    name="recommend"
                  />{" "}
                  Yes
                  <div> </div>
                  <input
                    type="radio"
                    value={false}
                    onChange={() => updateFormState("recommendationSelected")}
                    name="recommend"
                  />{" "}
                  No
                </label>
              </div>
            </div>
            <br />
            <div>
              Characteristics
              <br />
              <div>
                <br />
                <Characteristics
                  onChangeSize={() => updateFormState("sizeSelected")}
                  onChangeWidth={() => updateFormState("widthSelected")}
                  onChangeComfort={() => updateFormState("comfortSelected")}
                  onChangeQuality={() => updateFormState("qualitySelected")}
                  onChangeLength={() => updateFormState("lengthSelected")}
                  onChangeFit={() => updateFormState("fitSelected")}
                />
              </div>
            </div>
            <label>
              Review Summary
              <br />
              <input
                type="text"
                placeholder="Example: Best purchase ever!"
                maxLength="60"
                style={{ width: "300px" }}
                required={true}
                value={state.reviewSummaryValue}
                onChange={() => updateFormState("reviewSummaryValue")}
              />
            </label>
            <br />
            <br />
            <label>
              Review Body
              <br />
              <input
                type="text"
                placeholder="Why did you like the product or not?"
                maxLength="1000"
                minLength="50"
                style={{ width: "300px" }}
                required={true}
                value={state.reviewBodyValue}
                onChange={() =>
                  updateFormState("reviewBodyValue", "reviewBodyCharacters")
                }
              />
              <br />
              {state.reviewBodyCharacters < 50 ? (
                <div>
                  Minimum required characters left:{" "}
                  {50 - state.reviewBodyCharacters}
                </div>
              ) : (
                <div>Minimum reached</div>
              )}
            </label>
            <br />

            <div>
              User Info
              <br />
              <label>
                Nickname
                <br />
                <input
                  type="text"
                  placeholder="Example: jackson11!"
                  maxLength="60"
                  style={{ width: "300px" }}
                  required={true}
                  value={state.usernameValue}
                  onChange={() => updateFormState("usernameValue")}
                />
                <br />
                For privacy reasons, do not use your full name or email address
              </label>
              <br />
              <br />
              <label>
                Email
                <br />
                <input
                  type="email"
                  placeholder="Example: jackson11@email.com"
                  maxLength="60"
                  style={{ width: "300px" }}
                  required={true}
                  value={state.emailValue}
                  onChange={() => updateFormState("emailValue")}
                />
                <br />
                For authentication reasons, you will not be emailed
              </label>
            </div>
            <br />
            <br />

            {state.showUrlUpload ? null : (
              <button onClick={showUrlUploadToggle}>Upload Photo URL</button>
            )}

            {state.showUrlUpload && state.urlCount >= 0 ? (
              <div>Photo URL Uploads | Limit: 5</div>
            ) : null}

            {state.showUrlUpload && state.urlCount < 4 ? (
              <button onClick={showOneMoreUrlBox}>Add Another Photo URL</button>
            ) : null}

            {state.showUrlUpload && state.urlCount >= 0 ? (
              <div>
                <div>
                  <label>
                    <br />
                    <input
                      type="text"
                      placeholder="Only URLs for hosted images are valid"
                      maxLength="1000"
                      style={{ width: "300px" }}
                      required={false}
                      value={state.urlValue1}
                      onChange={() => updateFormState("urlValue1")}
                    />
                    <br />
                    <div>Please enter a valid URL for a hosted photo</div>
                  </label>
                  <br />
                </div>
              </div>
            ) : null}

            {state.showUrlUpload && state.urlCount >= 1 ? (
              <div>
                <div>
                  <label>
                    <input
                      type="text"
                      placeholder="Only URLs for hosted images are valid"
                      maxLength="1000"
                      style={{ width: "300px" }}
                      required={false}
                      value={state.urlValue2}
                      onChange={() => updateFormState("urlValue2")}
                    />
                    <br />
                    <div>Please enter a valid URL for a hosted photo</div>
                  </label>
                  <br />
                </div>
              </div>
            ) : null}

            {state.showUrlUpload && state.urlCount >= 2 ? (
              <div>
                <div>
                  <label>
                    <input
                      type="text"
                      placeholder="Only URLs for hosted images are valid"
                      maxLength="1000"
                      style={{ width: "300px" }}
                      required={false}
                      value={state.urlValue3}
                      onChange={() => updateFormState("urlValue3")}
                    />
                    <br />
                    <div>Please enter a valid URL for a hosted photo</div>
                  </label>
                  <br />
                </div>
              </div>
            ) : null}

            {state.showUrlUpload && state.urlCount >= 3 ? (
              <div>
                <div>
                  <label>
                    <input
                      type="text"
                      placeholder="Only URLs for hosted images are valid"
                      maxLength="1000"
                      style={{ width: "300px" }}
                      required={false}
                      value={state.urlValue4}
                      onChange={() => updateFormState("urlValue4")}
                    />
                    <br />
                    <div>Please enter a valid URL for a hosted photo</div>
                  </label>
                  <br />
                </div>
              </div>
            ) : null}

            {state.showUrlUpload && state.urlCount >= 4 ? (
              <div>
                <div>
                  <label>
                    <input
                      type="text"
                      placeholder="Only URLs for hosted images are valid"
                      maxLength="1000"
                      style={{ width: "300px" }}
                      required={false}
                      value={state.urlValue5}
                      onChange={() => updateFormState("urlValue5")}
                    />
                    <br />
                    <div>Please enter a valid URL for a hosted photo</div>
                  </label>
                  <br />
                </div>
              </div>
            ) : null}

            <br />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="review-modal-footer">
          <button
            className="review-modal-close-button"
            onClick={props.showModalState}
          >
            Close Review Box
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
