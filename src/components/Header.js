import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

const Bar = styled.View`
  height: 10px;
  width: 100%;
  position: absolute;
  top: 0;
  background-color: blue;
`

const Header = styled.View`
  height: 40px;
  width: 100%;
  position: absolute;
  top: 10px;
  background-color: #66f;
`

export default (Header = () => (
  <View>
    <Bar />
    <Header />
  </View>
))
