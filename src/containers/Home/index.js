import React, { Component } from 'react'
import config from '../../config'
import {
  StartButton,
  QuestionDisplay,
  Background,
  Text,
  TextWrap
} from './styles'
import Questions from '../../components/Questions'
import Results from '../../components/Results'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      question: 0,
      started: false,
      movie: null,
      cast: [],
      response: [],
      finished: false,
      beginQ: false
    }
  }

  componentDidMount() {
    if (
      this.state.question !== 0 &&
      this.state.question - 1 === this.state.cast.length
    ) {
      this.setState(prevState => ({ finished: !prevState.finished }))
    }
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        config.movie_api.key
      }&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1&primary_release_year=2019`,
      {
        method: 'GET'
      }
    )
      .then(res => res.json())
      .then(movies =>
        this.setState({ movies: movies.results }, () => {
          this.setState(
            prevState => ({
              movie:
                prevState.movies[
                  Math.floor(Math.random() * prevState.movies.length)
                ]
            }),
            () =>
              fetch(
                `https://api.themoviedb.org/3/movie/${
                  this.state.movie.id
                }/credits?api_key=${config.movie_api.key}`,
                {
                  method: 'GET'
                }
              )
                .then(res => res.json())
                .then(movieInfo => {
                  this.setState({ cast: movieInfo.cast.splice(0, 5) })
                })
                .catch(error => console.log(error))
          )
        })
      )
      .catch(error => console.log(error))
  }

  start = () => {
    this.setState(prevState => ({
      question: prevState.question + 1,
      started: !prevState.started
    }))
  }

  finish = () => {
    this.setState(prevState => ({
      finished: !prevState.finished
    }))
  }

  update = valObj => {
    this.setState(valObj)
  }

  render() {
    const {
      question,
      started,
      movie,
      cast,
      finished,
      response,
      beginQ
    } = this.state
    return (
      <Background>
        {!started && (
          <QuestionDisplay>
            <Text fontsize="60px" fontweight="bold" color="#f2f2f2">
              Movies & Celebrity Trivia!
            </Text>
          </QuestionDisplay>
        )}
        {started && question - 1 !== cast.length && beginQ && (
          <QuestionDisplay>
            <Text fontsize="60px" fontweight="bold" color="#f2f2f2">
              Question #{question}
            </Text>
          </QuestionDisplay>
        )}
        {started && question - 1 !== cast.length && (
          <Questions
            movieTitle={movie.title}
            questionNum={question}
            castList={cast}
            started={started}
            updateFunc={this.update}
            finished={finished}
          />
        )}
        {!started && question - 1 !== cast.length && (
          <StartButton onClick={this.start} displaying={started}>
            <Text fontsize="40px" bold color="black">
              Start!
            </Text>
          </StartButton>
        )}
        {question - 1 === cast.length && !finished && (
          <StartButton onClick={this.finish}>
            <Text fontsize="40px" bold color="black">
              Finish
            </Text>
          </StartButton>
        )}
        {finished && (
          <Results
            playerAnswers={response}
            answers={cast.map(cast => cast.name)}
          />
        )}
        <TextWrap>
          <Text fontsize="18px" color="#f2f2f2">
            Created by Joon Kim using React
          </Text>
        </TextWrap>
      </Background>
    )
  }
}

export default Home
