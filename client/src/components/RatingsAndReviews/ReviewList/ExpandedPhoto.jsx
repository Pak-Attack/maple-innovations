import React from "react";

class ExpandedPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          position: "fixed",
          left: "0",
          right: "0",
          top: "0",
          bottom: "0",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          className="individual-review-photos"
          src={this.props.photo}
          onClick={this.props.toggleImage}
          style={{
            maxWidth: "50%",
            height: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </div>
    );
  }
}

export default ExpandedPhoto;
