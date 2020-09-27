import React, { useEffect } from 'react'
import { Container, Title, LoadingIcon, Logo } from './styles'
import { useNavigation } from '@react-navigation/native'
//Converter SVG em react Component https://react-svgr.com/playground/?native=true
import Dog from '../../components/icons/dog'
import AsyncStorage from '@react-native-community/async-storage'

export default () => {
    const navigation = useNavigation()

    const checkToken = async () => {
        const token = await AsyncStorage.getItem('token')
        if (token) {
            //validar token
        } else {
            navigation.navigate('SignIn')
        }
    }

    useEffect(() => {
        checkToken()
    }, [])

    return (
        <Container>
            <Logo><Dog /></Logo>

            <Title>Dog Finder</Title>
            <LoadingIcon size='lange' color='#FFF' />
        </Container>
    )
}