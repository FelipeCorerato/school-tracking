import React from 'react';
import { 
    createAppContainer, 
    createStackNavigator, 
    createSwitchNavigator
} from 'react-navigation';

import Splash from './pages/Splash';

import Main from './pages/Main';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

const AuthStack = createStackNavigator(
    { 
        Main,
        Login,
        Cadastro
    }, 
    {
        initialRouteName: 'Main'
    },
    { 
        defaultNavigationOptions: { 
            header: null,
            headerTintColor: '#000', 
            headerBackTitle: null 
        }
    }
);

const AppStack = createStackNavigator(
    { 
        // MenusStack, 
        // Evento,
        // Perfil,
        // ProfileStack,
        // AlterarInfos: {
        //     screen: AlterarInfos,
        //     navigationOptions: {
        //         gesturesEnabled: false
        //     }            
        // }
        Splash
    }, 
    { 
        defaultNavigationOptions: { 
            header: null
        }
    }
);

export default createAppContainer(
    createSwitchNavigator(
        {
            Splash,
            AuthStack,
            AppStack
        }, 
        {
            initialRouteName: 'Splash'
        },
        // {
        //     defaultNavigationOptions: {
        //         headerTintColor: '#000',
        //         headerBackTitle: null,
        //     },
        //     // mode: 'modal'
        // }
    )
);