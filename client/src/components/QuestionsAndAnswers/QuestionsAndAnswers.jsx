import React from "react";
import SearchQuestions from "./SearchQuestions";
import MoreAnsweredQuestions from "./MoreAnsweredQuestions";
import AddQuestion from "./AddQuestion";
import QuestionList from "./QuestionList/QuestionList";
import QuestionListEntry from "./QuestionList/QuestionListEntry";

import dummyDataObj from "./dummyData.js"

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: dummyDataObj
    }
  }

  render () {
    return (
      <div>
        <h2> Questions and Answers </h2>
        <div className="questions-and-answers-container">
          <div className="questions-and-answers-components-container">
            <SearchQuestions />
            <QuestionList dummyData={this.state.dummyData}/>
            <QuestionListEntry />
            <MoreAnsweredQuestions />
            <AddQuestion />
          </div>
        </div>
      </div>
    )
  }
}

export default QuestionsAndAnswers;