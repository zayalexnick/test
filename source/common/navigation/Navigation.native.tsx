import { createBottomTabNavigator, NavigationContainer, createStackNavigator } from 'react-navigation';

import Main from '~/Main/screens/Main.screen';
import EventsList from '~/Events/List/screens/List.screen';
import EventsItem from '~/Events/Item/screens/Item.screen';
import EventsAdd from '~/Events/Add/screens/Add.screen';
import Interests from '~/Interests/screens/Interests.screen';
import Profile from '~/Profile/screens/Profile.screen';

const Navigator: NavigationContainer = createBottomTabNavigator({
    Main: {
        screen: Main,
        navigationOptions: () => ({
            title: 'Главная'
        })
    },
    Events: {
        screen: createStackNavigator({
            List: {
                screen: EventsList,
            },
            Item: {
                screen: EventsItem,
            },
            Add: {
                screen: EventsAdd
            }
        }),
        navigationOptions: () => ({
            title: 'Афиша'
        })
    },
    Interests: {
        screen: Interests
    },
    Profile: {
        screen: Profile,
        navigationOptions: () => ({
            title: 'Профиль'
        })
    }
});

export default Navigator;