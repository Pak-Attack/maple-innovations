import React, { useState } from "react";
import QuestionListEntry from "./QuestionListEntry";

const QuestionList = ({ questionData }) => {
  const [questionCount, setQuestionCount] = useState(2);

  //write method here that adds two or more to questionCount and answerCount on click
  return (
    <div>
      <div>
        {questionData
          .sort((a, b) => {
            return b.question_helpfulness - a.question_helpfulness;
          })
          .map((questionObj, idx) => {
            return <QuestionListEntry questionObj={questionObj} key={idx} />;
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
- .slice(0, questionCount)
*/
