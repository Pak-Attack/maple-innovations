import React from "react";
import NewStarRating from "./NewStarRating.jsx";
import Characteristics from "./Characteristics.jsx";

class ReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      reviewSummaryValueValid: false,
      reviewBodyValueValid: false,
      usernameValueValid: false,
      emailValueValid: false,
      reviewBodyCharacters: 0,
    };

    this.handleReviewFormSubmit = this.handleReviewFormSubmit.bind(this);
    this.handleReviewSummaryValueChange =
      this.handleReviewSummaryValueChange.bind(this);
    this.handleReviewBodyValueChange =
      this.handleReviewBodyValueChange.bind(this);
    this.handleUsernameValueChange = this.handleUsernameValueChange.bind(this);
    this.handleEmailValueChange = this.handleEmailValueChange.bind(this);
    this.selectStarRating = this.selectStarRating.bind(this);

    this.onChangeRecommendation = this.onChangeRecommendation.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onChangeWidth = this.onChangeWidth.bind(this);
    this.onChangeComfort = this.onChangeComfort.bind(this);
    this.onChangeQuality = this.onChangeQuality.bind(this);
    this.onChangeLength = this.onChangeLength.bind(this);
    this.onChangeFit = this.onChangeFit.bind(this);
  }

  selectStarRating(input) {
    this.state.starRatingSelected = input;
  }

  handleReviewFormSubmit() {
    event.preventDefault();
    let characteristics = {};
    let size, width, comfort, quality, length, fit;

    this.props.ratings.characteristics.Size
      ? (characteristics[this.props.ratings.characteristics.Size.id] =
          this.state.sizeSelected)
      : null;
    this.props.ratings.characteristics.Width
      ? (characteristics[this.props.ratings.characteristics.Width.id] =
          this.state.widthSelected)
      : null;
    this.props.ratings.characteristics.Comfort
      ? (characteristics[this.props.ratings.characteristics.Comfort.id] =
          this.state.comfortSelected)
      : null;
    this.props.ratings.characteristics.Quality
      ? (characteristics[this.props.ratings.characteristics.Quality.id] =
          this.state.qualitySelected)
      : null;
    this.props.ratings.characteristics.Length
      ? (characteristics[this.props.ratings.characteristics.Length.id] =
          this.state.lengthSelected)
      : null;
    this.props.ratings.characteristics.Fit
      ? (characteristics[this.props.ratings.characteristics.Fit.id] =
          this.state.fitSelected)
      : null;

    const review = {
      rating: this.state.starRatingSelected,
      recommend: this.state.recommendationSelected,
      photos: [],
      characteristics: characteristics,

      summary: this.state.reviewSummaryValue,
      body: this.state.reviewBodyValue,
      name: this.state.usernameValue,
      email: this.state.emailValue,
    };

    this.props.submitNewReview(review);

    this.props.showModalState();

    this.setState({
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
      reviewSummaryValueValid: false,
      reviewBodyValueValid: false,
      usernameValueValid: false,
      emailValueValid: false,
      reviewBodyCharacters: 0,
    });
  }

  handleReviewSummaryValueChange() {
    this.setState({
      reviewSummaryValue: event.target.value,
    });
  }

  handleReviewBodyValueChange() {
    this.setState({
      reviewBodyValue: event.target.value,
      reviewBodyCharacters: event.target.value.length,
    });
  }

  handleUsernameValueChange() {
    this.setState({
      usernameValue: event.target.value,
    });
  }

  handleEmailValueChange() {
    this.setState({
      emailValue: event.target.value,
    });
  }

  onChangeRecommendation(event) {
    this.setState({
      recommendationSelected: event.target.value,
    });
  }

  onChangeSize(size) {
    this.setState({
      sizeSelected: size,
    });
  }

  onChangeWidth(width) {
    this.setState({
      widthSelected: width,
    });
  }

  onChangeComfort(comfort) {
    this.setState({
      comfortSelected: comfort,
    });
  }

  onChangeQuality(quality) {
    this.setState({
      qualitySelected: quality,
    });
  }

  onChangeLength(length) {
    this.setState({
      lengthSelected: length,
    });
  }

  onChangeFit(fit) {
    this.setState({
      fitSelected: fit,
    });
  }

  render() {
    return (
      <div className="review-modal">
        <div
          className="review-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="review-modal-header">
            <h2 className="review-modal-title">Write Your Review</h2>
          </div>
          <div className="review-modal-body">
            <form onSubmit={this.handleReviewFormSubmit}>
              <div>
                <NewStarRating selectStarRating={this.selectStarRating} />
              </div>
              <br />
              <div>
                Do you recommend this product?
                <div className="recommendation-radio">
                  <label>
                    <input
                      type="radio"
                      value={true}
                      onChange={this.onChangeRecommendation}
                      name="recommend"
                    />{" "}
                    Yes
                    <div> </div>
                    <input
                      type="radio"
                      value={false}
                      onChange={this.onChangeRecommendation}
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
                    onChangeSize={this.onChangeSize}
                    onChangeWidth={this.onChangeWidth}
                    onChangeComfort={this.onChangeComfort}
                    onChangeQuality={this.onChangeQuality}
                    onChangeLength={this.onChangeLength}
                    onChangeFit={this.onChangeFit}
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
                  required={true}
                  value={this.state.reviewSummaryValue}
                  onChange={this.handleReviewSummaryValueChange}
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
                  width="100px"
                  required={true}
                  value={this.state.reviewBodyValue}
                  onChange={this.handleReviewBodyValueChange}
                />
                <br />
                {this.state.reviewBodyCharacters < 50 ? (
                  <div>
                    Minimum required characters left:{" "}
                    {50 - this.state.reviewBodyCharacters}
                  </div>
                ) : (
                  <div>Minimum reached</div>
                )}
              </label>
              <br />
              {/* <label>
                Upload your photos:
                <button>Click to upload</button>
              </label>
              <br />
              <br /> */}
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
                    required={true}
                    value={this.state.usernameValue}
                    onChange={this.handleUsernameValueChange}
                  />
                  <br />
                  For privacy reasons, do not use your full name or email
                  address
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
                    required={true}
                    value={this.state.emailValue}
                    onChange={this.handleEmailValueChange}
                  />
                  <br />
                  For authentication reasons, you will not be emailed
                </label>
              </div>
              <br />
              <br />
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div className="review-modal-footer">
            <button
              className="review-modal-close-button"
              onClick={this.props.showModalState}
            >
              Close Review Box
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewModal;
