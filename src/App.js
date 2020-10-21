import React from 'react';
import Board from './components/Board';
import styled from "styled-components";

const StyledApp = styled.div`
  width:100%;
  height:100vh;
  background-color:purple;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

function App() {
  return (
    <StyledApp >
      <Board/>
    </StyledApp>
  );
}

export default App;
