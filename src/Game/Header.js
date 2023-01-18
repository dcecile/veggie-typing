import styled from 'styled-components'

export function Header() {
  return (
    <HeaderRoot>
      <HeaderText>Veggie Typing</HeaderText>
    </HeaderRoot>
  );
}

const HeaderRoot = styled.header`
  margin: 1em;
`

const HeaderText = styled.h1`
`

