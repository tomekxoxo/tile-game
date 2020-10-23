import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Box from "./Box";
import * as actions from "../store/actions/index";
import Score from "./Score";
import Modal from "./Modal";

const StyledBoard = styled.div`
  display: grid;
  grid-gap: 2px;
  grid-template-columns: repeat(${(props) => props.cols && props.cols}, 1fr);
  grid-template-rows: repeat(${(props) => props.rows && props.rows}, 1fr);
`;

const Board = (props) => {
  const {
    onPopulateBoard,
    onCheckIfCanMove,
    rows,
    cols,
    blockarr,
    move,
  } = props;

  useEffect(() => {
    onPopulateBoard(rows, cols);
  }, []);

  useEffect(() => {
    if (blockarr.length > 0) {
      onCheckIfCanMove(blockarr);
    }
  }, [blockarr]);

  const showModal = () => {
    if (move === false) {
      return <Modal />;
    }
  };

  let blocks;

  blocks = blockarr.map((element) => {
    return <Box key={element.id} id={element.id} color={element.color} />;
  });

  return (
    <React.Fragment>
      <StyledBoard rows={rows} cols={cols}>
        {blocks}
      </StyledBoard>
      <Score />
      {showModal()}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    rows: state.rows,
    cols: state.cols,
    blockarr: state.blockArr,
    move: state.move,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPopulateBoard: (rows, cols) => {
      dispatch(actions.populateBoard(rows, cols));
    },
    onCheckIfCanMove: (arr) => {
      dispatch(actions.checkIfCanMove(arr));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
