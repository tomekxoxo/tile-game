import React from "react";
import styled from "styled-components";

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
export default Score;
