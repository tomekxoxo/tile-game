import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Box from "./Box";
import * as actions from "../store/actions/index";
import Score from "./Score";

const StyledBoard = styled.div`
  display: grid;
  grid-gap: 2px;
  grid-template-columns: repeat(${(props) => props.cols && props.cols}, 1fr);
  grid-template-rows: repeat(${(props) => props.rows && props.rows}, 1fr);
`;

const Board = (props) => {
  const { onPopulateBoard, rows, cols, blockarr } = props;

  useEffect(() => {
    onPopulateBoard(rows, cols);
  }, []);

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
