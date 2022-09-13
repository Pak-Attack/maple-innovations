import React, { useState } from "react";

const NewStarRating = (props) => {
  const [state, setState] = useState({
    rating: 0,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    clicked: false,
    numClicked: null,
    ratingDescription: null,
  });

  function clearStars(num) {
    if (!state.clicked) {
      setState((prev) => {
        return {
          ...prev,
          1: false,
          2: false,
          3: false,
          4: false,
          5: false,
        };
      });
    }
  }

  function onStarOneMouseEnterChange() {
    setState((prev) => {
      return {
        ...prev,
        1: true,
      };
    });
  }

  function handleStarOneClick() {
    clearStars();
    props.selectStarRating(1);
    setState((prev) => {
      return {
        1: true,
        clicked: true,
        numClicked: 1,
        ratingDescription: "Poor",
      };
    });
  }

  function onStarTwoMouseEnterChange() {
    setState((prev) => {
      return {
        ...prev,
        1: true,
        2: true,
      };
    });
  }

  function handleStarTwoClick() {
    clearStars(2);
    props.selectStarRating(2);
    setState((prev) => {
      return {
        ...prev,
        1: true,
        2: true,
        clicked: true,
        numClicked: 2,
        ratingDescription: "Fair",
      };
    });
  }

  function onStarThreeMouseEnterChange() {
    setState((prev) => {
      return {
        ...prev,
        1: true,
        2: true,
        3: true,
      };
    });
  }

  function handleStarThreeClick() {
    clearStars();
    props.selectStarRating(3);
    setState((prev) => {
      return {
        ...prev,
        1: true,
        2: true,
        3: true,
        clicked: true,
        numClicked: 3,
        ratingDescription: "Average",
      };
    });
  }

  function onStarFourMouseEnterChange() {
    setState((prev) => {
      return {
        ...prev,
        1: true,
        2: true,
        3: true,
        4: true,
      };
    });
  }

  function handleStarFourClick() {
    clearStars(4);
    props.selectStarRating(4);
    setState((prev) => {
      return {
        ...prev,
        1: true,
        2: true,
        3: true,
        4: true,
        clicked: true,
        numClicked: 4,
        ratingDescription: "Good",
      };
    });
  }

  function onStarFiveMouseEnterChange() {
    setState((prev) => {
      return {
        ...prev,
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
      };
    });
  }

  function handleStarFiveClick() {
    clearStars(5);
    props.selectStarRating(5);
    setState((prev) => {
      return {
        ...prev,
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
        clicked: true,
        numClicked: true,
        ratingDescription: "Great",
      };
    });
  }

  return (
    <div
      className="star-rating"
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        type="button"
        onMouseLeave={() => clearStars(0)}
        onMouseEnter={onStarOneMouseEnterChange}
        onClick={handleStarOneClick}
      >
        {" "}
        {state["1"] ? "★" : "☆"}
      </div>
      <div
        type="button"
        onMouseLeave={() => clearStars(0)}
        onMouseEnter={onStarTwoMouseEnterChange}
        onClick={handleStarTwoClick}
      >
        {" "}
        {state["2"] ? "★" : "☆"}
      </div>
      <div
        type="button"
        onMouseLeave={() => clearStars(0)}
        onMouseEnter={onStarThreeMouseEnterChange}
        onClick={handleStarThreeClick}
      >
        {" "}
        {state["3"] ? "★" : "☆"}
      </div>
      <div
        type="button"
        onMouseLeave={() => clearStars(0)}
        onMouseEnter={onStarFourMouseEnterChange}
        onClick={handleStarFourClick}
      >
        {" "}
        {state["4"] ? "★" : "☆"}
      </div>
      <div
        type="button"
        onMouseLeave={() => clearStars(0)}
        onMouseEnter={onStarFiveMouseEnterChange}
        onClick={handleStarFiveClick}
      >
        {" "}
        {state["5"] ? "★" : "☆"}
      </div>
      <div style={{ marginLeft: "5px", marginTop: "2.5px" }}>
        {state.ratingDescription}
      </div>
    </div>
  );
};

export default NewStarRating;
