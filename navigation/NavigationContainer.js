import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import BottomStack from './stacks/BottomStack';


const Container = () => {
  return (
    <NavigationContainer>
      <BottomStack />
    </NavigationContainer>
  )
}

export default Container