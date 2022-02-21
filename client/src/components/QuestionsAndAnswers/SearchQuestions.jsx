import React from "react";
import styled from "styled-components";

// const SearchDiv = styled.div`
//   width: 75%;
//   display: block;
//   background: yellow;
//   color: #3a3b3c;
//   margin: 0 1em;
//   padding: 0.25em 1em;
//   cursor: pointer;
// `;

const SearchBox = styled.input`
  width: 75%;
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
              placeholder="Have a question? Search for answers"
            />
          </label>
          <button>
            search icon
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

*/

