import React from "react";
import ExpandedPhoto from "./ExpandedPhoto.jsx";

class ReviewPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showExpandedImage: false,
    };

    this.toggleImage = this.toggleImage.bind(this);
  }

  expandImage() {}

  toggleImage(e) {
    e => e.stopPropagation()
    this.setState({
      showExpandedImage: !this.state.showExpandedImage,
    });
  }

  render() {
    return (
      <div>
        <div>
          <img
            className="individual-review-photos"
            src={this.props.photo.url}
            style={{
              maxHeight: "70px",
              width: "auto"
            }}
            onClick={this.toggleImage}
          />
        </div>
        {this.state.showExpandedImage ? (
          <ExpandedPhoto
            photo={this.props.photo.url}
            toggleImage={this.toggleImage}
          />
        ) : null}
      </div>
    );
  }
}

export default ReviewPhoto;
