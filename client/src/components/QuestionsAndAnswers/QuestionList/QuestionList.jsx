import React from "react";
import QuestionListEntry from "./QuestionListEntry";

const QuestionList = (props) => {

    return (
      <div>
        <h2>
          Question List
        </h2>
        <div>
          {props.dummyData.results.map((questionObj, idx) => (
            <QuestionListEntry dummyData={questionObj} key={idx} />
          ))}
        </div>
      </div>
    )
}

export default QuestionList;