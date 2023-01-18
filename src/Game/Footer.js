import styled from 'styled-components'

export function Footer({gameState}) {
  return (
    <FooterRoot>
      <span>Score: {gameState.score}</span>
      <span>Freeze: {gameState.freeze}</span>
    </FooterRoot>
  );
}

const FooterRoot = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1em;
`
