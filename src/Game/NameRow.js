import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { random } from 'underscore'
import { Name } from './Name'

export function NameRow({gameState, setGameState, index, row}) {
  const [spacerValues] = useState(() => {
    const array = new Array(row.row.length + 1)
    array.fill(undefined, 0, row.row.length + 1)
    return array.map(() => random(1, 100))
  })
  const children = []
  children.push(<Spacer key={-1} style={{flexGrow: spacerValues[0]}}/>)
  for (let i = 0; i < row.row.length; i++) {
    const name = row.row[i]
    children.push(<Name key={i} name={name}/>)
    children.push(<Spacer key={-i - 2} style={{flexGrow: spacerValues[i + 1]}}/>)
  }
  return (
      <NameRowRoot data-freeze={gameState.freeze ? "freeze" : "not-freeze"} onAnimationEnd={() => {
          const newNames = [...gameState.names]
          let newScore = gameState.score
          for (const name of row.row) {
            if (name.type === "disease" && !name.matched) {
              newScore = Math.floor(newScore / 2)
            }
          }
          newNames.splice(index, 1)
          console.log(index, row.row, newNames.length, gameState.names.length)
          setGameState({
              ...gameState,
              names: newNames,
              score: newScore
          })
      }}>
        {children}
      </NameRowRoot>
  )
}

const translate = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(40em);
  }
`;

const NameRowRoot = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  animation: ${translate} 30s both linear;

  &[data-freeze=freeze] {
    animation-play-state: paused;
  }
`

const Spacer = styled.span`
  flex-shrink: 1;
`
