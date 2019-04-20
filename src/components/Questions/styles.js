import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Container = styled(Flex)`
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: auto;
`

export const Text = styled.p`
  font-family: sans-serif;
  font-size: ${props => props.fontsize};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  color: ${props => props.color};
`

export const QuestionCard = styled(Flex)`
  flex-direction: column;
  display: ${props => (props.displaying ? 'none' : 'block')};
  width: 100%;
  min-width: 400px;
  height: 150px;
  background-color: #f2f2f2;
  box-shadow: 10px 10px 5px grey;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const AnswersContainer = styled(Flex)`
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: auto;
  margin-top: 50px;
`

export const AnswerCard = styled(Flex)`
  background-color: #f2f2f2;
  box-shadow: 10px 10px 5px grey;
  width: 40%;
  height: 150px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  font-family: sans-serif;
  font-size: 30px;
  &:hover {
    cursor: pointer;
    border: 5px solid #0080ff;
  }
`

export const Next = styled.button`
  background-color: #f2f2f2;
  text-align: center;
  align-self: flex-end;
  &:hover {
    cursor: pointer;
    border: 5px solid #0080ff;
  }
`

export const Column = styled(Flex)`
  flex-direction: column;
  text-align: center;
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
