import React, {useState} from "react";
import QuestionListEntry from "./QuestionListEntry";

const QuestionList = (props) => {
  //how long is this list? add method and state
  //to render 2 Qs: slice with a count (saved in state) .slice(0, questionCountInState).map
  // console.log('props.dummyData:', props.dummyData)
  const [questionCount, setQuestionCount] = useState(2)

  //write method here that adds two or more to questionCount and answerCount on click
  return (
      <div>
        <div>
          {props.dummyData.slice(0, questionCount).map((questionObj, idx) => {
            // console.log('👾👾👾 questionObj 👾👾👾  ->', questionObj)
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
- leave buttons here to change the count states on button click
- WORK ON ORDERING QUESTIONS BY HELPFULNESS
- slice(0, questionCount).
*/