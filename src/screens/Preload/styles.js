import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
background-color: #52B5AC;
flex: 1;
justify-content: center;
align-items: center;
`

export const Title = styled.Text`
font-size:25px;
color: #FFF;
`

export const Logo = styled.View`
transform:scale(0.7);
`

export const LoadingIcon = styled.ActivityIndicator`
margin-top:50px;
`