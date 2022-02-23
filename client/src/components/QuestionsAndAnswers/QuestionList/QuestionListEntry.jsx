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
`;

const InlineHeader = styled.h2`
  padding: .25em 0em .25em;
  display: inline-block;
`;

const AnswerBlock = styled.div`
  background: transparent;
  font-weight: thin;
  font-size: small;
  padding: 0.25em 1em;
`;

const Paragraph = styled.p`
  color: #3a3b3c;
  font-size: x-small;
  font-size: 7px;

`;

const Button = styled.button`
  height: 16px;
  font-size: x-small;
`;

const StyledSpan = styled.span`
  color: #3a3b3c;
  height: 16px;
  font-size: 7px;
  float: right;
`;

const ClickableText= styled.span`
  text-decoration-line: underline;
`;

const QuestionListEntry = ({questionObj}) => {
  const [answerCount, setAnswerCount] = useState(2)
  const [show, setShow] = useState(false);


  if (questionObj === undefined) {
    return (<div></div>)
  } else {

    return (
      <MainDiv className="questions-and-answers-question-list-entry">
       <span>
         <BlockHeader>Q: {questionObj.question_body}</BlockHeader>
          {Object.values(questionObj.answers)
          .sort((a, b) => { return b.helpfulness - a.helpfulness; })
          .slice(0, answerCount)
          .map((answerObj, idx) => (
            <AnswerBlock key={idx}>
              <span className='answer-header-body'>
               <h3> A: </h3>{answerObj.body}
               <StyledSpan> Helpful? <ClickableText>Yes</ClickableText> | <ClickableText onClick={() => setShow(true)}>
                  Add Answer
                </ClickableText>
               </StyledSpan>
               <AddAnswerModal show={show} onClose={() => setShow(false)}/>
              </span>
              <Paragraph>
                by {answerObj.answerer_name} | Helpful? <ClickableText>Yes</ClickableText> | <ClickableText>Report</ClickableText>
              </Paragraph>
            </AnswerBlock>
   ))}
       </span>
     </MainDiv>
    )
  }
};

export default QuestionListEntry;

/*
TODO :
- fix so that  'A:' only renders for the first answer of each question (notes above)
*/





