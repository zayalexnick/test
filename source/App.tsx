import * as React from 'react';
import Auth from 'gl-auth-bridge';
import { View, Button } from 'react-native';
/*import { Provider } from 'mobx-react';
import { ThemeProvider } from 'styled-components';

import stores from '@/mobx/stores';
import ThemeConfig from '@/theme/ThemeConfig';

import Navigation from '@/navigation/Navigation';

export default () => (
    <Provider { ...stores }>
        <ThemeProvider theme={ThemeConfig}>
            <Navigation />
        </ThemeProvider>
    </Provider>
);*/



export default () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={() => Auth.showAccountsListView()} title="Авторизация" />
    </View>
)