import React from "react";
import styled from "styled-components";
import Backdrop from "./Backdrop";
import { connect } from "react-redux";

const StyledModal = styled.div`
  border-radius: 5px;
  padding: 1rem;
  position: absolute;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  button{
    border:none;
    background-color:transparent;
    padding:.5rem;
    cursor:pointer;
    &:hover{
      transform:rotate(360deg);
      transition: transform ease-in-out .4s;
    }
  }
`;

const Modal = (props) => {
  const { score } = props;

  const reloadHandler = () => {
    window.location.reload(true);
  }

  return (
    <React.Fragment>
      <Backdrop />
      <StyledModal>
        <h1>Game Over</h1>
        <p>Your score: {score}</p>
        <button onClick={reloadHandler}>
          <i className="fas fa-sync-alt"></i>
        </button>
      </StyledModal>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    score: state.score,
  };
};

export default connect(mapStateToProps, null)(Modal);
