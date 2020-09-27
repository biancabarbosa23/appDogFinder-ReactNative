import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './src/stack/mainStack'

export default () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  )
}