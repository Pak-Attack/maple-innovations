import React from 'react';
import axios from 'react';

import Overview from './Overview/Overview.jsx';
import QuestionAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import RelatedItemsAndComparison from './RelatedItemsAndComparison/RelatedItemsAndComparison.jsx';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h1>Maple Innovations</h1>
        <div>
          <Overview />
          <RelatedItemsAndComparison />
          <QuestionAndAnswers />
          <RatingsAndReviews />
        </div>
      </div>
    )
  }
}

export default App;