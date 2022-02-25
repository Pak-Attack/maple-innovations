import React from "react";

class NewStarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      starOne: false,
      starTwo: false,
      starThree: false,
      starFour: false,
      starFive: false,
      clicked: false,
      ratingDescription: null,
    };

    this.clearStars = this.clearStars.bind(this);
    this.onStarOneMouseEnterChange = this.onStarOneMouseEnterChange.bind(this);
    this.onStarTwoMouseEnterChange = this.onStarTwoMouseEnterChange.bind(this);
    this.onStarThreeMouseEnterChange =
      this.onStarThreeMouseEnterChange.bind(this);
    this.onStarFourMouseEnterChange =
      this.onStarFourMouseEnterChange.bind(this);
    this.onStarFiveMouseEnterChange =
      this.onStarFiveMouseEnterChange.bind(this);

    this.handleStarOneClick = this.handleStarOneClick.bind(this);
    this.handleStarTwoClick = this.handleStarTwoClick.bind(this);
    this.handleStarThreeClick = this.handleStarThreeClick.bind(this);
    this.handleStarFourClick = this.handleStarFourClick.bind(this);
    this.handleStarFiveClick = this.handleStarFiveClick.bind(this);

    this.clearStarsAfterClick = this.clearStarsAfterClick.bind(this);
  }

  clearStars() {
    if (!this.state.clicked) {
      this.setState({
        starOne: false,
        starTwo: false,
        starThree: false,
        starFour: false,
        starFive: false,
      });
    }
  }

  clearStarsAfterClick() {
    this.setState({
      starOne: false,
      starTwo: false,
      starThree: false,
      starFour: false,
      starFive: false,
    });
  }

  onStarOneMouseEnterChange() {
    this.setState({
      starOne: true,
    });
  }

  handleStarOneClick() {
    this.clearStarsAfterClick();
    this.props.selectStarRating(1);
    this.setState({
      starOne: true,
      clicked: true,
      ratingDescription: "Poor",
    });
  }

  onStarTwoMouseEnterChange() {
    this.setState({
      starOne: true,
      starTwo: true,
    });
  }

  handleStarTwoClick() {
    this.clearStarsAfterClick();
    this.props.selectStarRating(2);
    this.setState({
      starOne: true,
      starTwo: true,
      clicked: true,
      ratingDescription: "Fair",
    });
  }

  onStarThreeMouseEnterChange() {
    this.setState({
      starOne: true,
      starTwo: true,
      starThree: true,
    });
  }

  handleStarThreeClick() {
    this.clearStarsAfterClick();
    this.props.selectStarRating(3);
    this.setState({
      starOne: true,
      starTwo: true,
      starThree: true,
      clicked: true,
      ratingDescription: "Average",
    });
  }

  onStarFourMouseEnterChange() {
    this.setState({
      starOne: true,
      starTwo: true,
      starThree: true,
      starFour: true,
    });
  }

  handleStarFourClick() {
    this.clearStarsAfterClick();
    this.props.selectStarRating(4);
    this.setState({
      starOne: true,
      starTwo: true,
      starThree: true,
      starFour: true,
      clicked: true,
      ratingDescription: "Good",
    });
  }

  onStarFiveMouseEnterChange() {
    this.setState({
      starOne: true,
      starTwo: true,
      starThree: true,
      starFour: true,
      starFive: true,
    });
  }

  handleStarFiveClick() {
    this.clearStarsAfterClick();
    this.props.selectStarRating(5);
    this.setState({
      starOne: true,
      starTwo: true,
      starThree: true,
      starFour: true,
      starFive: true,
      clicked: true,
      ratingDescription: "Great",
    });
  }

  render() {
    return (
      <div
        className="star-rating"
        style={{
          display: "flex",
          flexDirection: "row",
          fontWeight: this.state.hovering ? "bold" : "normal",
        }}
      >
        <div
          type="button"
          onMouseLeave={this.clearStars}
          onMouseEnter={this.onStarOneMouseEnterChange}
          onClick={this.handleStarOneClick.bind(this)}
        >
          {" "}
          {this.state.starOne ? "★" : "☆"}
        </div>
        <div
          type="button"
          onMouseLeave={this.clearStars}
          onMouseEnter={this.onStarTwoMouseEnterChange}
          onClick={this.handleStarTwoClick.bind(this)}
        >
          {" "}
          {this.state.starTwo ? "★" : "☆"}
        </div>
        <div
          type="button"
          onMouseLeave={this.clearStars}
          onMouseEnter={this.onStarThreeMouseEnterChange}
          onClick={this.handleStarThreeClick.bind(this)}
        >
          {" "}
          {this.state.starThree ? "★" : "☆"}
        </div>
        <div
          type="button"
          onMouseLeave={this.clearStars}
          onMouseEnter={this.onStarFourMouseEnterChange}
          onClick={this.handleStarFourClick.bind(this)}
        >
          {" "}
          {this.state.starFour ? "★" : "☆"}
        </div>
        <div
          type="button"
          onMouseLeave={this.clearStars}
          onMouseEnter={this.onStarFiveMouseEnterChange}
          onClick={this.handleStarFiveClick.bind(this)}
        >
          {" "}
          {this.state.starFive ? "★" : "☆"}
        </div>
        <div style={{ marginLeft: "5px", marginTop: "2.5px" }}>
          {this.state.ratingDescription}
        </div>
      </div>
    );
  }
}

export default NewStarRating;
