import React from "react";
import styled from "styled-components";

const SearchBox = styled.input`
  height: 3rem;
  font-size: 2rem;
  border-radius: 2px;
  outline: 1px solid #3a3b3c;
  border: transparent;
  padding: 3px 3px 3px 3px;
  width: 80%;
  cursor: pointer;
  margin: 5px 1px 3px 1px;
  flex-grow: 1;
  &:hover {
    outline: 1.5px solid #3a3b3c;
  }
`;

const SearchQuestions = (props) => {

  return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log('submitted form')
          }}
          >
          <label>
            <SearchBox onChange={(e) => {
            props.onSearchKeystroke(e)
            }}
              type="text"
              size="sm"
              placeholder="Have a question? Search for answers..."
            />
          </label>
          <button className="search-button">
            <span>search </span>
          </button>
        </form>
      </div>
    );
}

export default SearchQuestions;

/*
TODO :
  - use search icon
  - add onClick functionality
*/

