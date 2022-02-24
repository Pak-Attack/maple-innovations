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

const QuestionList = ({ questionData }) => {
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
            return <QuestionListEntry questionObj={questionObj} key={idx} />;
          })}
      </div>
      <br/>
        <StyledButton>More Questions + </StyledButton>
        <StyledButton onClick={() => setShow(true)}>Add A Question + </StyledButton>
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
-  write method that adds two or more to questionCount and answerCount on click
*/
