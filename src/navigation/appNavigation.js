/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import Profile from '../pages/profile';
import Result from '../pages/result';
import ChooseCoin from '../pages/chooseCoin';
import PurchaseDetails from '../pages/purchaseDetails';

const Stack = createStackNavigator();

export default function appNavigator() {
  return (
    <Stack.Navigator>
      <>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Result"
          component={Result}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ChooseCoin"
          component={ChooseCoin}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PurchaseDetails"
          component={PurchaseDetails}
          options={{
            headerShown: false,
          }}
        />
      </>
    </Stack.Navigator>
  );
}
