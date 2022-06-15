import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import Home from '../screens/Home';
import SecondScreen from '../screens/SecondScreen';
const Stack = createNativeStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        animationEnabled: false,
        headerShown: false
      }}
    />
    <Stack.Screen
      name="SecondScreen"
      component={SecondScreen}
      options={{
        animationEnabled: false,
        headerShown: false
      }}
    />
    {/* <Stack.Screen
      name="Movies"
      component={MoviesScreen}
      options={{
        animationEnabled: false,
        headerShown: false
      }}
    />

    <Stack.Screen
      name="MoviesDetail"
      component={MovieDetail}
      options={{
        animationEnabled: false,
        headerShown: false
      }}
      />

    <Stack.Screen
      name="MoviesDetailApi"
      component={MovieDetailApi}
      options={{
        animationEnabled: false,
        headerShown: false
      }}
      />
    <Stack.Screen
      name="MyList"
      component={MyListScreen}
      options={{
        animationEnabled: false,
        headerShown: false
      }}
    /> */}

  </Stack.Navigator>
);
