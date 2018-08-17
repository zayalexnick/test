import * as React from 'react';
import { Container, Text } from '../styles/Main.styles.native';
import RNGlAuth from 'gl-auth-bridge';
import {Button} from "react-native";

export default class Main extends React.Component {

    render(){
        return(
            <Container>
                <Button title='press' onPress={() => RNGlAuth.showAccountsListView()} />
                <Text>Главная страница (мобильная)</Text>
            </Container>
        )
    }
}