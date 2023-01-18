import { useRef, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import { Canvas } from './Game/Canvas';
import { Input } from './Game/Input';
import { Footer } from './Game/Footer';
import { Header } from './Game/Header';
import { initGameState } from './Game/State';

export function App() {
  const inputRef = useRef();
  const [gameState, setGameState] = useState(() => initGameState())

  return (
    <AppRoot>
      <GlobalStyle/>
      <Header />
      <Canvas gameState={gameState} setGameState={setGameState} inputRef={inputRef} />
      <Input ref={inputRef} gameState={gameState} setGameState={setGameState} />
      <Footer gameState={gameState} />
    </AppRoot>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    display: grid;
    place-items: center;
    min-width: 100vw;
    min-height: 100vh;
  }
`

const AppRoot = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid black;
  width: 30em;
  height: 40em;
  z-index: 0;
`
