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
    <InputRoot ref={inputRef}/>
  );
};
export const Input = forwardRef(InputHandle)

const InputRoot = styled.input`
  margin: auto 1em 0;
`
