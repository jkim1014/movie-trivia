import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Wrapper = styled(Flex)`
  justify-content: center;
  width: 100%;
  height: auto;
`

export const Column = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Card = styled(Flex)`
  text-align: center;
  width: 80%;
  height: auto;
  background-color: #f2f2f2;
  margin: 8px;
  justify-content: center;
`

export const Text = styled.p`
  font-family: sans-serif;
  font-size: ${props => props.fontsize};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  color: ${props => props.color};
`

export const Info = styled(Flex)`
  width: 70%;
  text-align: center;
  justify-content: center;
`

export const Row = styled(Flex)`
  justify-content: space-evenly;
  width: 70%;
  height: auto;
`

export const NewRound = styled(Flex)`
  text-align: center;
  width: 70%;
  height: auto;
  background-color: #f2f2f2;
  margin: 8px;
  justify-content: center;
  &:hover {
    cursor: pointer;
    background-color: grey;
  }
`
