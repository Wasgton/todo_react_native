import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/home';
import Edit from '../pages/edit';

const Stack = createStackNavigator();

const Routes = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Edit' component={Edit} />
        </Stack.Navigator>
    )
}

export default Routes;