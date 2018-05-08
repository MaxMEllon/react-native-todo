import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import Header from '../components/Header'

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </Container>
    )
  }
}
