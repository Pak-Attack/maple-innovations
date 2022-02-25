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
  margin-top: 15px;
  margin-bottom: 15px;
  flex-grow: 1;
  &:hover {
    outline: 3px solid #bbb;
  }
`;

const SearchQuestions = (props) => {

  return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}>
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


