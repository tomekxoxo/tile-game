import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color:#FFF;
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.color && props.color};
  cursor: pointer;
  &:hover {
    transform: scale(1.04);
  }
`;

const Box = (props) => {
  const [id, setId] = useState(null);

  useEffect(() => {
    setId(props.id);
  }, []);

  return (
    <StyledBox
      color={props.color}
      onClick={() => props.onDelete(id, props.blockArr, props.score)}
    >
      {/* <h1>{id}</h1> */}
    </StyledBox>
  );
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Box);
