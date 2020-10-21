import React from 'react';
import Board from './components/Board';
import styled from "styled-components";

const StyledApp = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-color: #eee;
`

function App() {
  return (
    <StyledApp >
      <Board/>
    </StyledApp>
  );
}

export default App;
