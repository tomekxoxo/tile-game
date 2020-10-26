import React from "react";
import styled from "styled-components";
import Backdrop from "../components/Backdrop";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

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
  p{
    margin:1rem 0;
  }
  button {
    border: none;
    background-color: transparent;
    padding: 0.5rem;
    cursor: pointer;
    i{
      font-size:1.2rem;
    }
    &:hover {
      transform: rotate(360deg);
      transition: transform ease-in-out 0.4s;
    }
  }
`;

const Modal = (props) => {
  const { onPopulateBoard, onRestartGame, score, rows, cols } = props;

  const restartGame = () => {
    onRestartGame();
    onPopulateBoard(rows, cols);
  };

  return (
    <React.Fragment>
      <Backdrop />
      <StyledModal>
        <h1>Game Over</h1>
        <p>Your score: {score}</p>
        <button onClick={restartGame}>
          <i className="fas fa-sync-alt"></i>
        </button>
      </StyledModal>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    score: state.score,
    rows: state.rows,
    cols: state.cols,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPopulateBoard: (rows, cols) => {
      dispatch(actions.populateBoard(rows, cols));
    },
    onRestartGame: () => {
      dispatch(actions.restartGame());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
