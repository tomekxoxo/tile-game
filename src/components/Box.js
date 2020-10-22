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
    blockArr,
    score,
    cols,
    rows,
  } = props;

  const [id, setId] = useState(null);

  useEffect(() => {
    setId(props.id);
  }, []);

  const clickHandler = () => {
    onDelete(id, blockArr);
    onUpdateScore(blockArr, score);
    onMoveBlocksDown(blockArr);
    onGenerateNewBlocks(blockArr);
  };

  return <StyledBox color={props.color} onClick={clickHandler}></StyledBox>;
};

const mapStateToProps = (state) => {
  return {
    rows: state.rows,
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
    onMoveBlocksDown: (arr) => {
      dispatch(actions.moveBlocksDown(arr));
    },
    onGenerateNewBlocks: (arr) => {
      dispatch(actions.generateNewBlocks(arr));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Box);
