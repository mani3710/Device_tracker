import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as Route from './route';
import Home from '../screen/home';
import * as screens from './screen';
const Stack = createStackNavigator();



const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name={Route.HOME_SCREEN} component={screens.HomeScreen} />

                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name={Route.ADD_DEVICE_SCREEN} component={screens.AddDeviceScreen} />
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name={Route.EDIT_DEVICE_SCREEN} component={screens.EditDeviceScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
