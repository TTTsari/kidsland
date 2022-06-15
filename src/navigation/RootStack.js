import * as React from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// tab navigation
import TabNavigation from './TabNavigation';

// screens
import ModalAddProfile from '../screens/ModalAddProfile';
import ModalCastConnect from '../screens/ModalCastConnect';
import ModalManageProfiles from '../screens/ModalManageProfiles';
import ModalVideo from '../screens/ModalVideo';
import ModalWebView from '../screens/ModalWebView';
import MovieDetail from '../screens/MovieDetail';
import MovieDetailApi from '../screens/MovieDetailApi';
import MyList from '../screens/MyList';

const Stack = createNativeStackNavigator();

export default () => (
  <NavigationContainer theme={DarkTheme}>
    <Stack.Navigator
      screenOptions={{
        presentation: 'fullScreenModal'
      }}
    >
      <Stack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen name="MyList" component={MyList}/>

      <Stack.Screen name="MovieDetail" component={MovieDetail}/>

      <Stack.Screen name="MovieDetailApi" component={MovieDetailApi}/>

      <Stack.Screen
        name="ModalAddProfile"
        component={ModalAddProfile}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="ModalCastConnect"
        component={ModalCastConnect}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="ModalManageProfiles"
        component={ModalManageProfiles}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="ModalVideo"
        component={ModalVideo}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="ModalWebView"
        component={ModalWebView}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
