import React, { useEffect } from 'react';
import * as actions from "../store/actions/index";
import styled from "styled-components";
import { connect } from "react-redux";

const StyledScore = styled.div`
  p{
    color:#000;
    font-size:2.2rem;
  }
`

const Score = (props) => {

  useEffect(() => {
    props.onUpdateScore(props.arr)
  }, [props.update])
  
  useEffect(() => {
    props.onMoveBlocksDown(props.arr)
  },[props.score])


  return (
    <StyledScore>
      <p>score:{props.score}</p>
    </StyledScore>
  );
};

const mapStateToProps = (state) => {
  return {
    score: state.score,
    arr: state.blockArr,
    update: state.move,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateScore: (arr) => {
      dispatch(actions.updateScore(arr));
    },
    onMoveBlocksDown: (arr) => {
      dispatch(actions.moveBlocksDown(arr));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Score);