import React from 'react';
import axios from 'axios';
import Overview from './Overview/Overview.jsx';
import QuestionAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import RelatedItemsAndComparison from './RelatedItemsAndComparison/RelatedItemsAndComparison.jsx';
import SearchBar from './SearchBar/SearchBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductRating: 3.59,
      allProducts: [],
      currentProductID: 37314
    }
    this.handleChangeOfProductID = this.handleChangeOfProductID.bind(this);
  }

  //loads data necessary for search bar
  componentDidMount() {
    axios.get('/products')
      .then((results)=>{
          this.setState({
              allProducts: results.data
          })
      })
  }

  //After clicking on search results, this will change the state of the current product id
  handleChangeOfProductID (newID) {
    this.setState({
        currentProductID: newID
    })
  }

  render() {
    const x = 47; //47
    // console.log('current test product selected: ', this.state.allProducts[x])
    const {
      currentProductRating,
      allProducts,
      currentProductID
    } = this.state;
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
          />
          <RelatedItemsAndComparison />
          <QuestionAndAnswers />
          <RatingsAndReviews
            currentProductRating={currentProductRating}
            // currentProduct={currentProduct}
            currentProductID={currentProductID}
          />
        </div>
      </div>
    );
  }
}

export default App;
