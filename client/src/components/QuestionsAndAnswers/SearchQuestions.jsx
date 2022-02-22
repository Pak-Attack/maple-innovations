import React from "react";
import styled from "styled-components";

const SearchBox = styled.input`
  width: 65%;
  cursor: pointer;
  margin: 5px 1px 3px 1px;
`;

const SearchQuestions = (props) => {

  return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("submitted form!")
            //PLACEHOLDER - write a method for this on root component
          }}
          >
          <label>
            <SearchBox
              type="text"
              size="sm"
              placeholder="Have a question? Search for answers..."
            />
          </label>
          <button>
            search
          </button>
        </form>
      </div>
    );
}

export default SearchQuestions;

/*
TODO :
  - use icons here
  - add onChange and onClick functionality
  - use .includes to search
*/

