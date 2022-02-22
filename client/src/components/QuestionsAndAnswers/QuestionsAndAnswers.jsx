import React, {useState, useEffect} from "react";
import axios from 'axios';
import SearchQuestions from "./SearchQuestions";
import QuestionList from "./QuestionList/QuestionList";
import QuestionListEntry from "./QuestionList/QuestionListEntry";
import dummyQuestionObj from "./dummyData.js"
import config from "../../../../config.js"
import styled from "styled-components";


const BasicStyle = styled.div`
  color: #878787;
  font-family: Arial, Helvetica, sans-serif;
  background-color: transparent;
  color: #3a3b3c;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const Header = styled.p`
  padding-top: 3em;
  font-size: small;
`;

const QuestionsAndAnswers = () => {
  const [questionData, setQuestionData] = useState(dummyQuestionObj.results);
  const [productID, setProductID] = useState(37311)
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(5)

    return (
      <BasicStyle>
        <Header> Questions and Answers </Header>
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
*/
