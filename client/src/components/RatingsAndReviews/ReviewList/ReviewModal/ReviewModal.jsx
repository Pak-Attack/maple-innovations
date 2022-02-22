import React from "react";
import NewStarRating from "./NewStarRating.jsx";
import Characteristics from "./Characteristics.jsx";

class ReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewSummaryValue: "",
      reviewBodyValue: "",
      usernameValue: "",
      emailValue: "",
      reviewSummaryValueValid: false,
      reviewBodyValueValid: false,
      usernameValueValid: false,
      emailValueValid: false,
      starRatingSelected: null,
      sizeSelected: 0,
      widthSelected: 0,
      comfortSelected: 0,
      qualitySelected: 0,
      lengthSelected: 0,
      fitSelected: 0,
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

    this.stateTest = this.stateTest.bind(this);
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
    // console.log(
    //   "console logging that form is submitting, but code not built out yet!"
    // );
    const form = {
      rating: this.state.starRatingSelected,
      summary: this.state.reviewSummaryValue,
      body: this.state.reviewBodyValue,
      username: this.state.usernameValue,
      email: this.state.emailValue,
    };
    if (form.summary === "") {
      alert("Fill out Review Summary");
      return;
    }
    if (form.body === "") {
      alert("Fill out Review Body");
      return;
    }
    if (form.username === "") {
      alert("Input a nickname");
      return;
    }
    if (form.email === "") {
      alert("Input a valid email");
      return;
    }

    // console.log("form: ", form);
    this.props.showModalState();
    // axios.post('api placeholder', form)
    //   .then(alert('Form Submitted'))
    //   .catch(err => console.error(err))
    this.setState({
      reviewSummaryValue: "",
      reviewBodyValue: "",
      usernameValue: "",
      emailValue: "",
      reviewSummaryValueValid: false,
      reviewBodyValueValid: false,
      usernameValueValid: false,
      emailValueValid: false,
    });
  }

  handleReviewSummaryValueChange() {
    this.setState({
      reviewSummaryValue: event.target.value,
    });
    // console.log(this.state.reviewSummaryValue);
  }

  handleReviewBodyValueChange() {
    this.setState({
      reviewBodyValue: event.target.value,
      reviewBodyCharacters: event.target.value.length
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

  stateTest() {
    console.log("sizeSelected", this.state.sizeSelected);
    console.log("widthSelected", this.state.widthSelected);
    console.log("comfortSelected", this.state.comfortSelected);
    console.log("qualitySelected", this.state.qualitySelected);
    console.log("lengthSelected", this.state.lengthSelected);
    console.log("fitSelected", this.state.fitSelected);
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
            <h4>About the Product Name Here</h4>
          </div>
          <div className="review-modal-body">
            <div>
              <NewStarRating selectStarRating={this.selectStarRating} />
            </div>
            <div>
              characteristics rating here
              <button onClick={this.stateTest}>State Tester</button>
              <div>
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
            <form onSubmit={this.handleReviewFormSubmit}>
              <label>
                Review Summary
                <br />
                <input
                  type="text"
                  placeholder="Example: Best purchase ever!"
                  maxLength="60"
                  value={this.state.reviewSummaryValue}
                  onChange={this.handleReviewSummaryValueChange}
                />
              </label>
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
                  value={this.state.reviewBodyValue}
                  onChange={this.handleReviewBodyValueChange}
                />
                <br />
                {this.state.reviewBodyCharacters < 50 ? (<div>Minimum required characters left: {50 - this.state.reviewBodyCharacters}</div>) : null}
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
                    value={this.state.usernameValue}
                    onChange={this.handleUsernameValueChange}
                  />
                </label>
                <br />
                <label>
                  Email
                  <br />
                  <input
                    type="text"
                    value={this.state.emailValue}
                    onChange={this.handleEmailValueChange}
                  />
                </label>
              </div>
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div className="review-modal-footer">
            <button
              className="review-modal-close-button"
              onClick={this.props.showModalState}
            >
              Close Modal
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewModal;
