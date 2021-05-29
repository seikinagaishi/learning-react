import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/home';
import Item from './pages/item';

const AppStack = createStackNavigator();

const Routes = () => {
    return(
        <NavigationContainer>
            <AppStack.Navigator headerMode='none' screenOptions={ {cardStyle: {backgroundColor: '#B29393'}} }>
                <AppStack.Screen name="home" component={Home} />
                <AppStack.Screen name="item" component={Item} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;