import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import Header from '../components/Header'
import TodoList from '../components/TodoList'
import * as actions from '../actions'

const Container = styled.View`
  background-color: #fff;
`

class Wrapper extends React.Component {
  componentDidMount() {
    this.props.sampleAction()
  }

  render() {
    return (
      <Container>
        <Header />
        <TodoList />
      </Container>
    )
  }
}

export default connect(
  state => {
    console.log(state)
    return state
  },
  {
    sampleAction: actions.sampleAction
  }
)(Wrapper)
