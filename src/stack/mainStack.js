import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Preload from '../screens/Preload'
import SignIn from '../screens/SingIn'

const Stack = createStackNavigator()

export default () => {
    return (
        <Stack.Navigator initialRouteName="Preload"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="SignIn" component={SignIn} />

        </Stack.Navigator>
    )
}