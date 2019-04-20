import React, { Component } from 'react'
import {
  Container,
  QuestionCard,
  AnswersContainer,
  Text,
  AnswerCard,
  Next,
  Column,
  StartButton
} from './styles'

class Questions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      started: this.props.started,
      movie: this.props.movieTitle,
      cast: this.props.castList,
      questionNum: this.props.questionNum,
      localres: [],
      beginQ: false
    }
  }

  handleAnswer = e => {
    e.persist()
    const val = [e.target.innerText]
    this.setState(
      prevState => ({
        localres: prevState.localres.concat([val]),
        questionNum: prevState.questionNum + 1
      }),
      () =>
        this.props.updateFunc({
          response: this.state.localres,
          question: this.state.questionNum
        })
    )
  }

  finishQuiz = () =>
    this.props.updateFunc({ finished: true, response: this.state.localres })

  render() {
    const { movie, cast, questionNum, beginQ } = this.state
    return (
      <Container>
        {beginQ && cast.length + 1 !== questionNum ? (
          <div>
            <QuestionCard>
              <Text color="black" fontsize="36px">
                Who was {cast[questionNum - 1].character} in the movie "{movie}
                "?
              </Text>
            </QuestionCard>
            <AnswersContainer>
              {cast.map((member, id) => (
                <AnswerCard key={id} onClick={this.handleAnswer}>
                  {member.name}
                </AnswerCard>
              ))}
            </AnswersContainer>
          </div>
        ) : (
          <Column>
            <Text color="black" fontsize="50px">
              Questions you will see are related to the movie "{movie}"
            </Text>
            <Next
              onClick={() =>
                this.setState(
                  prevState => ({ beginQ: !prevState.beginQ }),
                  () => this.props.updateFunc({ beginQ: this.state.beginQ })
                )
              }
            >
              <Text color="black" fontsize="50px">
                Continue!
              </Text>
            </Next>
          </Column>
        )}
        {questionNum - 1 === cast.length && !this.props.finished && (
          <StartButton onClick={this.finishQuiz}>
            <Text fontsize="40px" bold color="black">
              Finish
            </Text>
          </StartButton>
        )}
      </Container>
    )
  }
}

export default Questions
