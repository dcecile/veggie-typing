import { forwardRef, useImperativeHandle, useRef } from 'react';
import styled from 'styled-components'

function InputHandle({gameState, setGameState}, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return (
    <InputRoot ref={inputRef} value={gameState.input} onChange={(event) => {
      let newInput = event.target.value
      let newScore = gameState.score
      let newFreeze = gameState.freeze
      const newNames = []
      for (const row of gameState.names) {
        const newRow = []
        for (const name of row) {
          if (!name.matched && name.text === newInput) {
            if (name.type === "vegetable") {
              newScore += name.text.length * 10
            } else if (name.type === "pollinator") {
              newFreeze += 2
            }
            newRow.push({
              ...name,
              matched: true
            })
            newInput = ""
          } else {
            newRow.push(name)
          }
        }
        newNames.push(newRow)
      }
      setGameState({
        ...gameState,
        input: newInput,
        names: newNames,
        score: newScore,
        freeze: newFreeze
      })
    }}/>
  );
};
export const Input = forwardRef(InputHandle)

const InputRoot = styled.input`
  margin: auto 1em 0;
`
