import React from "react";
import QuestionListEntry from "./QuestionListEntry";

const QuestionList = (props) => {
  //how long is this list? add method and state
  //to render 2 Qs: slice with a count (saved in state) .slice(0, questionCountInState).map
  console.log('props.dummyData:', props.dummyData)
  return (
    <div>
      {props.dummyData.map((questionObj, idx) => (
        <QuestionListEntry dummyData={questionObj} key={idx} />
      ))}
      <button>More Questions</button>
      <button>Add A Question</button>
    </div>
  );
};

export default QuestionList;
