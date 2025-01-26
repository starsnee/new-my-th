import React, {useState} from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Game from "./mainpage";
import FirstPage from './first';

const Stack = createStackNavigator();
//create the constant data file 

//create changable data file
// type var = {
//     wage = 0,

// }
export default function Index() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={FirstPage} />
          <Stack.Screen name="Game" component={Game} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}