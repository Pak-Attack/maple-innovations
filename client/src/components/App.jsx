import React from "react";
import axios from "axios";
import Overview from "./Overview/Overview.jsx";
import QuestionAndAnswers from "./QuestionsAndAnswers/QuestionsAndAnswers.jsx";
import RatingsAndReviews from "./RatingsAndReviews/RatingsAndReviews.jsx";
import RelatedItemsAndComparison from "./RelatedItemsAndComparison/RelatedItemsAndComparison.jsx";
import SearchBar from "./SearchBar/SearchBar.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductRating: null,
      allProducts: [],
      totalRatings: 0,
      currentProductID: 37316,
    };
    this.handleChangeOfProductID = this.handleChangeOfProductID.bind(this);
    this.getCurrentProductRating = this.getCurrentProductRating.bind(this);
  }

  //loads data necessary for search bar
  componentDidMount() {
    axios
      .get("/products")
      .then((results) => {
        this.setState({
          allProducts: results.data,
        });
      })
      .then(this.getCurrentProductRating());
  }

  //After clicking on search results, this will change the state of the current product id
  handleChangeOfProductID(newID) {
    this.setState({
      currentProductID: newID,
    });
  }

  getCurrentProductRating() {
    axios
      .get(`/reviews/meta/${this.state.currentProductID}`)
      .then((results) => {
        const ratings = results.data;
        let oneStarCount = ratings.ratings["1"];
        let twoStarCount = ratings.ratings["2"];
        let threeStarCount = ratings.ratings["3"];
        let fourStarCount = ratings.ratings["4"];
        let fiveStarCount = ratings.ratings["5"];
        oneStarCount
          ? (oneStarCount = ratings.ratings["1"])
          : (oneStarCount = 0);
        twoStarCount
          ? (twoStarCount = ratings.ratings["2"])
          : (twoStarCount = 0);
        threeStarCount
          ? (threeStarCount = ratings.ratings["3"])
          : (threeStarCount = 0);
        fourStarCount
          ? (fourStarCount = ratings.ratings["4"])
          : (fourStarCount = 0);
        fiveStarCount
          ? (fiveStarCount = ratings.ratings["5"])
          : (fiveStarCount = 0);
        let totalStarCount =
          oneStarCount * 1 +
          twoStarCount * 2 +
          threeStarCount * 3 +
          fourStarCount * 4 +
          fiveStarCount * 5;
        let totalRatings =
          oneStarCount * 1 +
          twoStarCount * 1 +
          threeStarCount * 1 +
          fourStarCount * 1 +
          fiveStarCount * 1;
        let totalStarRating = (totalStarCount / totalRatings).toFixed(1);
        this.setState({
          currentProductRating: totalStarRating,
          totalRatings: totalRatings
        });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { currentProductRating, allProducts, currentProductID, totalRatings } = this.state;
    return (
      <div>
        <div>
          <SearchBar
            allProducts={allProducts}
            handleChangeOfProductID={this.handleChangeOfProductID}
          />
        </div>
        <div>
          <Overview
            currentProductRating={currentProductRating}
            currentProductID={currentProductID}
            totalRatings={totalRatings}
          />
          <QuestionAndAnswers currentProductID={currentProductID} />
          <RatingsAndReviews
            currentProductRating={currentProductRating}
            currentProductID={currentProductID}
          />
        </div>
      </div>
    );
  }
}

export default App;
