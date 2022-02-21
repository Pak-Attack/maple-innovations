import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from 'axios';


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

const QuestionListEntry = ({questionObj}) => {
  const [answerCount, setAnswerCount] = useState(2)

  if (questionObj === undefined) {
    return (<div></div>)
  } else {
  //API STATES
  // const [questionID, setQuestionID] = useState() //why cant I use questionObj.question_id?
  // const [page, setPage] = useState(1)
  // const [pageCount, setPageCount] = useState(5)
  // const [answerData, setAnswerData] = useState([]); //maybe change to some real data


  // useEffect(() => {

  //   axios.get(`/qa/questions/${questionID}/answers?page=${page}&count=${pageCount}`)
  //   .then((results) => {
  //     console.log('API ANSWER RESULTS:', results.data.results);
  //     setAnswerData(results.data.results);
  //   })
  //   .catch((err) => {
  //      console.log('API error:', err)
  //   })



  // }, []);

    return (
      <MainDiv className="questions-and-answers-question-list-entry">
       <span>
         <h2>Q: {questionObj.question_body}  ----> {questionObj.question_helpfulness}</h2>
          <div>A:{
          Object.values(questionObj.answers)
          .sort((a, b) => {
            return b.helpfulness - a.helpfulness;
          })
          .slice(0, answerCount)
 //sorting first doesnt work bc it doesnt actually sort the objects, just their helpfulness numbers in an array
 //wont work afterwards either because I need access to the answerId info in order to map
          .map((answerObj, idx) => (
            <SubDiv key={idx}>
              <h3 className='answer-header'>
     A:  </h3>
     <span className='answer-header-body'>{answerObj.body}</span>
     <p>by: {answerObj.answerer_name} | Helpful? <b>{answerObj.helpfulness}</b> users think so! | Report</p>
   </SubDiv>
   ))}


         </div>
       </span>
     </MainDiv>
    )
  }
};

export default QuestionListEntry;

/*
TODO :
- fix so that  'A:' only renders for the first answer of each question (notes above)
    - this may be simpler to adjust the A: and answer body to be two different inline elements, so that we only need to render A: once and not worry about conditional rendering
- change all instances of 'dummyData' to 'questionObj'


*/

/* <div>A: {answerData ?
  answerData.map((currentAnswer, idx) => {
    console.log('currentAnswer.body', currentAnswer.body)
   return
     <SubDiv key={idx}> test text
       {currentAnswer.body}
     </SubDiv>
  }): <div>not mapping</div>} </div> */


// {answerData.map((currentAnswer, idx) => {
//   return <SubDiv>
//     {/* {currentAnswer.body} */}
//   </SubDiv>
// })}


// take answer body out of the h3 and put it in a seperate div (p? h2?)
                  // conditionally render the h3 'A:'
                    // if current answerId is the first in the list of Ids, render A:, otherwise, render null or an empty h3 tag for indentation
                  // use css to make the next div inline


//                 .sort((a, b) => {
//                   return b - a;
//                 })

//  //will need to change all this once I connect to the API
//  Object.values(questionObj.answers)
//  .sort((a, b) => {
//   return b.helpfulness - a.helpfulness;
// })
// .slice(0, answerCount)
//  //sorting first doesnt work bc it doesnt actually sort the objects, just their helpfulness numbers in an array
//  //wont work afterwards either because I need access to the answerId info in order to map
//  .map((answerObj, idx) => (
//    <SubDiv key={idx}>
//      <h3 className='answer-header'>
//      A:  </h3>
//      <span className='answer-header-body'>{answerObj.body}</span>
//      <p>by: {answerObj.answerer_name} | Helpful? <b>{answerObj.helpfulness}</b> users think so! | Report</p>
//    </SubDiv>
//    ))
