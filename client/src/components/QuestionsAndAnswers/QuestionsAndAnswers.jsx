import React, {useState, useEffect} from "react";
import axios from 'axios';
import SearchQuestions from "./SearchQuestions";
import QuestionList from "./QuestionList/QuestionList";
import QuestionListEntry from "./QuestionList/QuestionListEntry";
import dummyQuestionObj from "./dummyData.js"
import config from "../../../../config.js"
import styled from "styled-components";

const BasicStyle = styled.div`
  background: transparent;
  color: #3a3b3c;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const QuestionsAndAnswers = () => {
  const [questionData, setQuestionData] = useState(dummyQuestionObj.results);
  const [productID, setProductID] = useState(37311)
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(5)


  useEffect(() => {
    axios.get(`/qa/questions?product_id=${productID}&page=${page}&count=${pageCount}`)
    .then(results => {
      setQuestionData(results.data.results);
    })

    //answers api req was here

  }, []);

// START REFORMATTING TO ACCEPT ANSWER API DATA AND RENDER THAT DYNAMICALLY
// THEN, SORT IT BEFORE RENDERING

    return (
      <BasicStyle>
        <h2> Questions and Answers </h2>
        <div className="questions-and-answers-container">
          <div className="questions-and-answers-components-container">
            <SearchQuestions />
            <QuestionList questionData={questionData}/>
            <QuestionListEntry />
          </div>
        </div>
      </BasicStyle>
    )
}

export default QuestionsAndAnswers;

/*

TODO :
  - make component for bottom buttons (?)
  - why is dummy data necessary for first render?
*/
