import React from "react";
import styled from "styled-components";

const StylishDiv = styled.div`
  background: transparent;
  color: #3a3b3c;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const QuestionListEntry = ({dummyData}) => {
  //how many answers to render? add method and state

  // return dummyData
  // ?
  //   <StylishDiv className="questions-and-answers-question-list-entry">
  //   <span>
  //     <h2>Q: {dummyData.question_body}</h2>
  //     <h3>A: *inline NOT header* Answer body text</h3>
  //     <p>by USER INFO HERE | Helpful? | Report </p>
  //   </span>
  // </StylishDiv>
  // :
  // null;

  if (dummyData === undefined) {
    return (<div></div>)
  } else {
    return (
      <StylishDiv className="questions-and-answers-question-list-entry">
       <span>
         <h2>Q: {dummyData.question_body}</h2>
         <h3>A: {dummyData.answers[0]}</h3>
         <p>by USER INFO HERE | Helpful? | Report </p>
       </span>
     </StylishDiv>
    )
  }
};

export default QuestionListEntry;

/*
TODO :
  - look more into the data I'll need here (console log the dummy data object and pinpoint the data)
  - consider future functionality by returning to document requirements
  - dynamically render answers
*/

