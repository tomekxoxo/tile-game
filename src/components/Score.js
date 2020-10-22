import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const StyledScore = styled.div`
  p {
    color: #000;
    font-size: 2.2rem;
  }
`;

const Score = (props) => {
  return (
    <StyledScore>
      <p>score:{props.score}</p>
    </StyledScore>
  );
};

const mapStateToProps = (state) => {
  return {
    score: state.score,
  };
};

export default connect(mapStateToProps, null)(Score);
