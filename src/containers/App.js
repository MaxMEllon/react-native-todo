import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import Header from '../components/Header'
import TodoList from '../components/TodoList'

const Container = styled.View`
  background-color: #fff;
`

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <TodoList />
      </Container>
    )
  }
}
