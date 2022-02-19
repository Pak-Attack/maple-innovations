import React, {useState} from "react";
import QuestionListEntry from "./QuestionListEntry";

const QuestionList = (props) => {
  //to render 2 Qs: slice with a count (saved in state) .slice(0, questionCountInState).map

  const [questionCount, setQuestionCount] = useState(2)

  //write method here that adds two or more to questionCount and answerCount on click

  console.log('props.dummyData:', props.dummyData)
  return (
      <div>
        <div>
          {props.dummyData.slice(0, questionCount).map((questionObj, idx) => {
            return <QuestionListEntry dummyData={questionObj} key={idx} />
          })}
        </div>
      <button>More Questions</button>
      <button>Add A Question</button>
    </div>
  );
};

export default QuestionList;


/*
TODO:
- maybe leave buttons in here to change the count states when buttons are clicked
*/