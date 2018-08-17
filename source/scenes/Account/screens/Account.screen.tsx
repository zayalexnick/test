import * as React from 'react';
import { View } from 'react-native';
import Auth from 'gl-auth-bridge';

interface PropsInterface {

}

interface StateInterface {

}

export default class Account extends React.Component<PropsInterface, StateInterface>
{
    auth: Auth = new Auth();
    render(): JSX.Element
    {
        return (
            <View>
                { this.auth.showAccountsListView() }
            </View>
        );
    }
}