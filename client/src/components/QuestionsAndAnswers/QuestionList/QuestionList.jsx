import React, { useState } from "react";
import QuestionListEntry from "./QuestionListEntry";
import AddQuestionModal from "./AddQuestionModal"
import styled from "styled-components";


const QuestionList = ({ questionData, highlightedString }) => {
  const [questionCount, setQuestionCount] = useState(2);
  const [show, setShow] = useState(false);

  return (
    <div>
      <div style={{ maxHeight: "350px", overflowY: "scroll" }}>
        {questionData
          .sort((a, b) => {
            return b.question_helpfulness - a.question_helpfulness;
          })
          .slice(0, questionCount)
          .map((questionObj, idx) => {
            return <QuestionListEntry questionObj={questionObj} highlightedString={highlightedString} key={idx} />;
          })}
      </div>
      <br/>

        {(questionData.length > questionCount) ?
          <button className="list-button add" onClick={() => {setQuestionCount(questionData.length)}}>
            <span>
            More Questions
            </span>
          </button>
          :
          <button className="list-button minimize" onClick={() => {setQuestionCount(2)}}>
            <span>
              Minimize Questions
            </span>
          </button>
        }

          <button className="list-button add" onClick={() => setShow(true)}>
            <span>
              Add A Question
            </span>
          </button>
        <AddQuestionModal show={show} onClose={() => setShow(false)}/>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default QuestionList;

/*
TODO:
*/
