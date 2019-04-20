import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Background = styled(Flex)`
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  background-color: #ffb35c;
  width: 100vw;
  height: auto;
  min-height: 100vh;
  padding-top: 10%;
  padding-bottom: 10%;
`

export const Text = styled.p`
  font-family: sans-serif;
  font-size: ${props => props.fontsize};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  color: ${props => props.color};
`

export const StartButton = styled(Flex)`
  flex-direction: column;
  display: ${props => (props.displaying ? 'none' : 'block')};
  width: 40%;
  min-width: 400px;
  height: 100px;
  background-color: #f2f2f2;
  box-shadow: 10px 10px 5px grey;
  border-radius: 10px;
  text-align: center;
  justify-content: center;
  &:hover {
    background-color: grey;
    cursor: pointer;
  }
`

export const QuestionDisplay = styled(Flex)`
  text-align: center;
`
export const TextWrap = styled(Flex)`
  position: absolute;
  top: 50px;
  right: 50px;
`
