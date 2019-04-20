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
    const intersection = this.props.answers.filter(value =>
      this.props.playerAnswers.includes(value)
    )
    this.setState({
      right: intersection.length,
      wrong: this.props.answers.length - intersection.length
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
