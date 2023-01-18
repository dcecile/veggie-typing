import styled from 'styled-components'
import { NameRow } from './NameRow';
import { startGame } from './State';

export function Canvas({gameState, setGameState, inputRef}) {
  if (!gameState.started) {
    return (
      <CanvasRoot onClick={() => {
        startGame(setGameState)
        inputRef.current?.focus()
      }}>
        <StartText>CLICK TO START</StartText>
      </CanvasRoot>
    );
  } else {
    return (
      <CanvasRoot onClick={() => {
        inputRef.current?.focus()
      }}>
        {gameState.names.map((row, i) => <NameRow key={i} gameState={gameState} setGameState={setGameState} index={i} row={row}/>)}
      </CanvasRoot>
    );
  }
}

const CanvasRoot = styled.main`
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`

const StartText = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  text-align: center;
`
