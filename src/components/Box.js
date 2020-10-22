import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.color && props.color};
  cursor: pointer;
  &:hover {
    transform: scale(1.08);
  }
  @media screen and (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

const Box = (props) => {
  const {
    onDelete,
    onUpdateScore,
    onMoveBlocksDown,
    onGenerateNewBlocks,
    onCheckIfCanMove,
    blockArr,
    score,
    cols,
  } = props;

  const [id, setId] = useState(null);

  useEffect(() => {
    setId(props.id);
  }, []);

  const clickHandler = () => {
    onDelete(id, blockArr);
    onUpdateScore(blockArr, score);
    onMoveBlocksDown(blockArr, cols);
    onGenerateNewBlocks(blockArr);
    onCheckIfCanMove(blockArr);
  };

  return <StyledBox color={props.color} onClick={clickHandler}><h4>{id}</h4></StyledBox>;
};

const mapStateToProps = (state) => {
  return {
    cols: state.cols,
    blockArr: state.blockArr,
    score: state.score,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (id, arr, score) => {
      dispatch(actions.deleteBox(id, arr, score));
    },
    onUpdateScore: (arr, prevScore) => {
      dispatch(actions.updateScore(arr, prevScore));
    },
    onMoveBlocksDown: (arr, cols) => {
      dispatch(actions.moveBlocksDown(arr, cols));
    },
    onGenerateNewBlocks: (arr) => {
      dispatch(actions.generateNewBlocks(arr));
    },
    onCheckIfCanMove: (arr) => {
      dispatch(actions.checkIfCanMove(arr));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Box);
