import React from "react";
import { Check } from "phosphor-react";

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMoreReview: false,
      productRating: this.props.productRating,
      helpfulnessButtonClicked: false,
      review: this.props.review,
    };

    // console.log(this.props.review.body.length)
    // console.log("ReviewListEntry Props: ", this.props);

    this.showMoreReview = this.showMoreReview.bind(this);
    this.helpfulButtonClickHandlerSplit = this.helpfulButtonClickHandlerSplit.bind(this);
  }

  componentDidUpdate() {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (this.props.review.helpfulness !== this.state.review.helpfulness) {
      this.setState({ review: this.props.review });
    }
  }

  showMoreReview() {
    this.setState({
      showMoreReview: true,
    });
  }

  helpfulButtonClickHandlerSplit(a, b) {
    if (!this.state.helpfulnessButtonClicked) {
    this.props.helpfulButtonClickHandler(a, b)
    this.setState({
      helpfulnessButtonClicked: true
    })}
  }

  render() {
    const fillRating = this.state.review.rating * 20;
    const unfillRating = this.state.review.rating * 20 - fillRating;
    return (
      <div>
        <div>
          <div className="ratings-and-reviews-entry-boxes">
            <div className="ratings-and-reviews-comments-stars-and-username-line">
              <div className="ratings-and-reviews-entry-box-stars">
                <div
                  className="review-list-stars"
                  style={{
                    backgroundImage: `linear-gradient(90deg, black ${fillRating}%, white ${unfillRating}%)`,
                  }}
                >
                  ★★★★★
                </div>
                <div className="review-list-stars-overlay">☆☆☆☆☆</div>
              </div>

              <div className="ratings-and-reviews-entry-box-user-and-date">
                {this.props.review.reviewer_name},{" "}
                {new Date(this.props.review.date).toLocaleDateString()}{" "}
              </div>
            </div>
            <br />
            <div className="ratings-and-reviews-entry-box-title">
              {this.props.review.summary.slice(0, 59)}
            </div>
            <br />
            <div className="ratings-and-reviews-entry-box-content-body">
              {this.props.review.body.length < 250 ? (
                this.props.review.body
              ) : this.state.showMoreReview ? (
                this.props.review.body
              ) : (
                <div>
                  <div>{this.props.review.body.slice(0, 249)}</div>{" "}
                  <a
                    style={{
                      textDecoration: "underline",
                      fontWeight: "100",
                    }}
                    onClick={this.showMoreReview}
                  >
                    Show more
                  </a>
                </div>
              )}
            </div>
            <br />
            <div className="ratings-and-reviews-entry-box-recommend">
              {this.props.review.recommend ? (
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

            {this.props.review.response ? (
              <div className="ratings-and-reviews-entry-box-response-box">
                <div className="ratings-and-reviews-entry-box-response">
                  <div>
                    <div>Response:</div>
                    <br />
                    <div>{this.props.review.response}</div>
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
                  onClick={() => this.helpfulButtonClickHandlerSplit(this.props.review.review_id, this.props.product_id)}
                >
                  {" "}
                  Yes
                </a>{" "}
                {`(${this.state.review.helpfulness})`}

                {/* <a
                  style={{
                    textDecoration: "underline",
                  }}
                  onClick={this.props.notHelpfulButtonClickHandler}
                >
                  {" "}
                  No
                </a>
                {`(${this.state.review.helpfulness})`} */}

                {" | "}
                <a
                  style={{
                    textDecoration: "underline",
                  }}
                >
                  Report
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewListEntry;
