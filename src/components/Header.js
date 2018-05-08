import React from 'react'
import { Header } from 'react-native-elements'
// import styled from 'styled-components/native'

export default function TodoAppHeader() {
  return (
    <Header
      placement="left"
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'todo-mvc', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
    />
  )
}
