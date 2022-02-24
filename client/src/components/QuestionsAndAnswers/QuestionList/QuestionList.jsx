import React, { useState } from "react";
import QuestionListEntry from "./QuestionListEntry";
import AddQuestionModal from "./AddQuestionModal"
import styled from "styled-components";


const StyledButton = styled.button`
  width: 130px;
  outline: 1px solid #3a3b3c;
  border: transparent;
  cursor: pointer;
  background-color: white;
  color: #3a3b3c;
  margin: 0px 2px 0px 4px;
  padding: 10px 10px 10px 10px;
  font-size: x-small;
`;

const QuestionList = ({ questionData, highlightedString }) => {
  const [questionCount, setQuestionCount] = useState(2);
  const [show, setShow] = useState(false);

  return (
    <div>
      <div>
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
          <button className="list-button minimize" onClick={() => {setQuestionCount(1)}}>
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
