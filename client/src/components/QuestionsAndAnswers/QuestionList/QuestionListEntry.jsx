import React from "react";
import styled from "styled-components";
// import AnswerList from "./AnswerList";

const MainDiv = styled.div`
  background: transparent;
  color: #3a3b3c;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const SubDiv = styled.div`
  background: transparent;
  font-weight: thin;
  color: #3a3b3c;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const QuestionListEntry = ({dummyData}) => {
  const [answerCount, setAnswerCount] = React.useState(2)

  if (dummyData === undefined) {
    return (<div></div>)
  } else {

    return (
      <MainDiv className="questions-and-answers-question-list-entry">
       <span>
         <h2>Q: {dummyData.question_body}</h2>
         <div>{
              Object.keys(dummyData.answers).slice(0, answerCount).map((answerId, idx) => (
                <SubDiv key={idx}>
                  <h3>A: <span class='START HERE'>{dummyData.answers[answerId].body}</span> </h3>
                  <p>by: {dummyData.answers[answerId].answerer_name} | Helpful? | Report</p>
                </SubDiv>
                ))
          //  <AnswerList questionInfo={dummyData} />

           } </div>
       </span>
     </MainDiv>
    )
  }
};

export default QuestionListEntry;

/*
TODO :
- fix so that answers render as thin and inline
*/

