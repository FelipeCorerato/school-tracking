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
import Chat from './pages/Chat';
import Ajustes from './pages/Ajustes';
import Info from './pages/Info';

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
        Mapa,
        Chat,
        Ajustes,
        Info
    }, 
    { 
        initialRouteName: 'Mapa',
        defaultNavigationOptions: {
            headerTintColor: '#000',
            headerBackTitle: null
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