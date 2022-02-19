import React, {useState, useEffect} from "react";
import axios from 'axios';
import SearchQuestions from "./SearchQuestions";
import AddQuestion from "./AddQuestion";
import QuestionList from "./QuestionList/QuestionList";
import QuestionListEntry from "./QuestionList/QuestionListEntry";
import dummyDataObj from "./dummyData.js"
import config from "../../../../config.js"
import styled from "styled-components";

const BasicStyle = styled.div`
  background: transparent;
  color: #3a3b3c;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const QuestionsAndAnswers = () => {
  const [dummyData, setDummyData] = useState(dummyDataObj.results)
  const [productID, setProductID] = useState(37311)
  const [pageCount, setPageCount] = useState(5)

  useEffect(() => {
    axios.get(`/qa/questions?product_id=${productID}&count=${pageCount}`)
    .then(results => {
      setDummyData(results.data.results);
    })

  }, []);

    return (
      <BasicStyle>
        <h2> Questions and Answers </h2>
        <div className="questions-and-answers-container">
          <div className="questions-and-answers-components-container">
            <SearchQuestions />
            <QuestionList dummyData={dummyData}/>
            <QuestionListEntry />
            {/* <MoreAnsweredQuestions />
            <AddQuestion /> */}
          </div>
        </div>
      </BasicStyle>
    )
}

export default QuestionsAndAnswers;

/*

TODO :
  - make component for bottom buttons
*/
