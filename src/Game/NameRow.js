import styled, { keyframes } from 'styled-components'
import { random } from 'underscore'
import { Name } from './Name'

export function NameRow({gameState, setGameState, index, row}) {
  const children = []
  children.push(<Spacer key={-1} style={{flexBasis: random(0, 100)}}/>)
  for (let i = 0; i < row.length; i++) {
    const name = row[i]
    children.push(<Name key={i} name={name}/>)
    children.push(<Spacer key={-i - 2} style={{flexBasis: random(0, 100)}}/>)
  }
  return (
      <NameRowRoot data-freeze={gameState.freeze ? "freeze" : "not-freeze"} onAnimationEnd={() => {
          const newNames = [...gameState.names]
          let newScore = gameState.score
          for (const name of row) {
            if (name.type === "disease" && !name.matched) {
              newScore /= 2
            }
          }
          newNames.splice(index, 1)
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
  animation: ${translate} 20s both linear;

  &[data-freeze=freeze] {
    animation-play-state: paused;
  }
`

const Spacer = styled.span`
  flex-shrink: 1;
`
