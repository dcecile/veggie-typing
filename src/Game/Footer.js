import styled from 'styled-components'

export function Footer({gameState}) {
  return (
    <FooterRoot>
      Score: {gameState.score}
    </FooterRoot>
  );
}

const FooterRoot = styled.footer`
  margin: 1em;
`

