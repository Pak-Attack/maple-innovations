import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from 'axios';
import AddAnswerModal from "./AddAnswerModal"

const MainDiv = styled.div`
  color: #3a3b3c;
  background: transparent;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const BlockHeader = styled.h2`
  padding: .25em 0em .25em;
  display: block;
  font-size: 2.2rem;
`;

const AnswerBlock = styled.div`
  background: transparent;
  font-weight: thin;
  font-size: 2rem;
  padding: 0.25em 1em;
`;

const Paragraph = styled.p`
  color: #3a3b3c;
  font-size: x-small;
  font-size: 1.5rem;
  font-weight: 200;
  margin-bottom: 5px;
`;

const StyledSpan = styled.span`
  color: #3a3b3c;
  height: 16px;
  font-size: 1.5rem;
  float: right;
  vertical-align: baseline;
  font-weight: 200;
`;

const ClickableSpan= styled.span`
  text-decoration-line: underline;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    transition: 0.3s;
    color: #bbb;
  }
`;

const ClickableDiv= styled.div`
  margin: 1em 2em;
  text-decoration-line: underline;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    transition: 0.3s;
    color: #bbb;
  }
`;

const QuestionListEntry = ({questionObj, highlightedString}) => {
  const [answerCount, setAnswerCount] = useState(2)
  const [show, setShow] = useState(false);

  if (questionObj === undefined) {
    return (<div></div>)
  } else {
    return (
      <MainDiv className="questions-and-answers-question-list-entry">
       <span>
        <BlockHeader>Q: {questionObj.question_body}
           <StyledSpan>  Helpful?  <ClickableSpan>Yes</ClickableSpan> ({questionObj.question_helpfulness}) |  <ClickableSpan onClick={() => setShow(true)}>Add Answer</ClickableSpan>
           <AddAnswerModal show={show} onClose={() => setShow(false)}/>
           </StyledSpan>
        </BlockHeader>
          {Object.values(questionObj.answers)
          .sort((a, b) => { return b.helpfulness - a.helpfulness; })
          .slice(0, answerCount)
          .map((answerObj, idx) => (
            <AnswerBlock key={idx}>
              <span>
                <h5> A: </h5> {answerObj.body}
              </span>
              <Paragraph>
                by {answerObj.answerer_name}, {new Date(answerObj.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}  |  Helpful? <ClickableSpan>Yes</ClickableSpan> ({answerObj.helpfulness}) |  <ClickableSpan>Report</ClickableSpan>
              </Paragraph>
            </AnswerBlock>
          ))}
      </span>
      {
      (Object.values(questionObj.answers).length <= 2)
          ?
          null
          :
            ((Object.values(questionObj.answers).length === answerCount)
            ?
            <ClickableDiv onClick={() => {setAnswerCount(2)}}>Collapse answers</ClickableDiv>
            :
            <ClickableDiv onClick={() => {setAnswerCount(Object.values(questionObj.answers).length)}}>See more answers</ClickableDiv>
            )
        }

     </MainDiv>
    )
  }
};

export default QuestionListEntry;

