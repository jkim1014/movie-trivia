import React, { Component } from 'react'
import { Wrapper, Row, Column, Card, Text, Info, NewRound } from './styles'

class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {
      right: null,
      wrong: null
    }
  }

  componentDidMount() {
    const { playerAnswers, answers } = this.props
    let count = 0
    answers.map(answer => {
      if (playerAnswers.flat().indexOf(answer) >= 0) {
        count += 1
      }
    })
    this.setState({
      right: count,
      wrong: this.props.answers.length - count
    })
  }
  render() {
    const { playerAnswers, answers } = this.props
    const { right, wrong } = this.state
    return (
      <Wrapper>
        <Column>
          <Row>
            <Column>
              <Text fontsize="30px">Your answers:</Text>
              {playerAnswers.map(answer => (
                <Card>
                  <Text fontsize="30px">{answer}</Text>
                </Card>
              ))}
            </Column>
            <Column>
              <Text fontsize="30px">Correct answers:</Text>
              {answers.map(answer => (
                <Card>
                  <Text fontsize="30px">{answer}</Text>
                </Card>
              ))}
            </Column>
          </Row>
          <Info>
            <Text fontsize="35px" color="#f2f2f2">
              {right} questions right, {wrong} questions wrong
            </Text>
          </Info>
          <NewRound onClick={() => window.location.reload()}>
            <Text>New Round!</Text>
          </NewRound>
        </Column>
      </Wrapper>
    )
  }
}

export default Results
