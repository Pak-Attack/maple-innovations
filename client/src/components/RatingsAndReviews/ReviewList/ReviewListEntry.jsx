import React from "react";
import { Check } from "phosphor-react";


class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMoreReview: false,
      productRating: this.props.productRating,
    };

    // console.log("ReviewListEntry Props: ", props);
    // console.log(this.props.review.body.length)

    this.showMoreReview = this.showMoreReview.bind(this);
  }

  showMoreReview() {
    this.setState({
      showMoreReview: true,
    });
  }

  render() {
    const fillRating = this.state.productRating * 20;
    const unfillRating = this.state.productRating * 20 - fillRating;
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
              title: {this.props.review.summary.slice(0, 59)}
            </div>
            <br />
            <div className="ratings-and-reviews-entry-box-content-body">
              content body:{" "}
              {this.props.review.body.length < 250 ? (
                this.props.review.body
              ) : this.state.showMoreReview ? (
                this.props.review.body
              ) : (
                <div>
                  <div>{this.props.review.body.slice(0, 249)}</div>{" "}
                  <button onClick={this.showMoreReview}>Show more</button>
                </div>
              )}
            </div>
            <br />
            <div className="ratings-and-reviews-entry-box-recommend">
              {this.props.review.recommend ? (
                <div><div><Check size={20} /></div><div style={{position: "absolute", marginLeft: 25, marginTop: -21, fontSize: "1.4rem"}}> I recommend this product</div></div>
              ) : null}
            </div>
            <br />
            <div className="ratings-and-reviews-entry-box-response">
              {this.props.review.response ? (
                <div>
                  <div>Response From Seller</div> {this.props.review.response}
                </div>
              ) : null}
            </div>
            <div>
              <div className="ratings-and-reviews-entry-box-helpful">
                Helpful? <button> yes</button> {10} <button>Report</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewListEntry;
