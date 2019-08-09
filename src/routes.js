import React from 'react';
import { 
    createAppContainer, 
    createStackNavigator, 
    createSwitchNavigator,
    createDrawerNavigator
} from 'react-navigation';

// SplashScreen
import Splash from './pages/Splash';

// Authentication Route
import Main from './pages/Main';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

// App Route
import Mapa from './pages/Mapa';

// Components
import Menu from './components/Menu';

const AuthStack = createStackNavigator(
    { 
        Main,
        Login,
        Cadastro
    }, 
    {
        initialRouteName: 'Main',
        defaultNavigationOptions: {
            header: null
        }
    }
);

const AppStackWithoutMenu = createStackNavigator(
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
        Mapa
    }, 
    { 
        initialRouteName: 'Mapa',
        defaultNavigationOptions: {
            header: null
        }
    }
);

const AppStack = createDrawerNavigator(
    {
        AppStackWithoutMenu
    },
    {
        drawerBackgroundColor: '#F2C94C', 
        contentComponent: Menu 
    }
)

export default createAppContainer(
    createSwitchNavigator(
        {
            Splash,
            AuthStack,
            AppStack
        }, 
        {
            initialRouteName: 'Splash'
        }
    )
);