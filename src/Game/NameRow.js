import styled, { keyframes } from 'styled-components'
import { Name } from './Name'

export function NameRow({gameState, setGameState, index, row}) {
    return (
        <NameRowRoot onAnimationEnd={() => {
            const newNames = [...gameState.names]
            newNames.splice(index, 1)
            setGameState({
                ...gameState,
                names: newNames
            })
        }}>
            {row.map((name, i) =>
                <Name key={i} name={name}/>
            )}
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
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  animation: ${translate} 20s both linear;
`
