import React from "react";

class ReviewPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <img
          className="individual-review-photos"
          src={this.props.url}
          style={{ width: "100px", height: "100px" }}
        />
      </div>
    );
  }
}

export default ReviewPhoto;
