import React from "react";
import styled from "styled-components";

const StyledBackdrop = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

`;

const Backdrop = () => {
  return <StyledBackdrop></StyledBackdrop>;
};

export default Backdrop;
