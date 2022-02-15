import React from "react";

const QuestionListEntry = (props) => {
  let dummyData = props.dummyData;
  if (!dummyData) {
    dummyData = {
      "question_id": 45,
      "question_body": "Who What When Why How?",
      "question_date": "2019-07-28T00:00:00.000Z",
      "asker_name": "Whomst",
      "question_helpfulness": 10,
      "reported": false,
      "answers": {
        71: {
          "id": 70,
          "body": "GREAT QUALITY",
          "date": "2019-11-28T00:00:00.000Z",
          "answerer_name": "GREATPERSON",
          "helpfulness": 6,
          "photos": [],
        }
      }
    };
  }

  console.log('dummyData', dummyData)

    return (

      <div className="questions-and-answers-question-list-entry">
        <span>
          <h3>Q: {dummyData.question_body}</h3>
        </span>
      </div>
    )
}

export default QuestionListEntry;