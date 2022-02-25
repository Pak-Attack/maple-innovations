import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  cursor: pointer;
  margin: 5px 1px 3px 1px;
`;

const AddAnswerModal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="qa-modal">
      <div className="qa-modal-content">
        <div className="qa-modal-header">
          <h4 className="qa-modal-title">Submit your Answer</h4>
          <p className="qa-modal-subtitle">to this question</p>
        </div>

        <div className="qa-modal-body">
          <label>Your Answer * </label>
          <StyledInput
            type="textarea"
            size="sm"
            placeholder="How long does this product last?">
          </StyledInput>
          <br/>
          <br/>
          <label>What is your nickname? * </label>
          <StyledInput
            type="text"
            size="sm"
            placeholder="Example: jack543!">
          </StyledInput>
          <br/>
          <br/>
          <label>Your email * </label>
          <StyledInput
            type="textarea"
            size="sm"
            placeholder="Example: jack@email.com">
          </StyledInput>
          <br/>
          <br/>

        </div>
        <div className="qa-modal-footer">
          <span>
         <button onClick={props.onClose} className="qa-modal-button">Close</button>
         <button onClick={props.onClose} className="qa-modal-button">Submit Answer</button>

         </span>
        </div>
      </div>
    </div>
  )

}

export default AddAnswerModal;

/*
TODO:
- add submit functionality
*/