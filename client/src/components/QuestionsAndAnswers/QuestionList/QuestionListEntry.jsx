import React from "react";
import styled from "styled-components";

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
                  <h3 className='answer-header'>
                  {// take answer body out of the h3 and put it in a seperate div (p? h2?)
                  // conditionally render the h3 'A:'
                    // if current answerId is the first in the list of Ids, render A:, otherwise, render null or an empty h3 tag for indentation
                  // use css to make the next div inline
                  }
                  A:  </h3>
                  <span className='answer-header-body'>{dummyData.answers[answerId].body}</span>
                  <p>by: {dummyData.answers[answerId].answerer_name} | Helpful? | Report</p>
                </SubDiv>
                ))
           } </div>
       </span>
     </MainDiv>
    )
  }
};

export default QuestionListEntry;

/*
TODO :
- fix so that  'A:' only renders for the first answer of each question (notes above)
- change all instances of 'dummyData' to 'questionData'
*/

