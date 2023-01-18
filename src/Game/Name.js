import styled from 'styled-components'

export function Name({name}) {
    return (
        <NameRoot data-type={name.type} data-matched={name.matched ? "matched" : "not-matched"}>
            <PartialMatch>{name.text.substring(0, name.partialMatch)}</PartialMatch>
            {name.text.substring(name.partialMatch)}
        </NameRoot>
    )
}

const NameRoot = styled.span`
    transition: opacity 1s;

    &[data-matched=matched] {
        opacity: 0;
    }
    &[data-type=vegetable] {
        color: green;
    }
    &[data-type=disease] {
        color: red;
    }
    &[data-type=pollinator] {
        color: blue;
    }
`

const PartialMatch = styled.span`
    background: black;
    color: white;
`
