import React, { useContext } from "react";
import { initializeApp, getApps } from "firebase/app";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../provider/AuthProvider";
import 'dotenv/config' 
import { REACT_APP_FIREBASE_API_KEY, REACT_APP_FIREBASE_APP_ID,
REACT_APP_FIREBASE_AUTH_DOMAIN, REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
 REACT_APP_FIREBASE_STORAGE_BUCKET} from 'react-native-dotenv'
// Main
import Home from "../screens/Home";
import SecondScreen from "../screens/SecondScreen";

// Auth screens
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import ForgetPassword from "../screens/auth/ForgetPassword";
import TabNavigation from './TabNavigation';


import Loading from "../screens/utils/Loading";

// Better put your these secret keys in .env file
const firebaseConfig = {
  apiKey: "AIzaSyCTNA5j3XLKYr4bJt7H5DRtdwDztL7do60",
  authDomain: "kidsland-c43fc.firebaseapp.com",
  projectId: "kidsland-c43fc",
  storageBucket: "kidsland-c43fc.appspot.com",
  messagingSenderId: "166780521305",
  appId: "1:166780521305:web:5e47164987efc140e7da48",
  measurementId: "G-3KT0HNHC9M"
};

if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

const AuthStack = createNativeStackNavigator();

const Auth = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
    </AuthStack.Navigator>
  );
};

const MainStack = createNativeStackNavigator();

const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{
          headerShown: false
        }}
      />
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="SecondScreen" component={SecondScreen} />
    </MainStack.Navigator>
  );
};

export default () => {
  const auth = useContext(AuthContext);
  const user = auth.user;
  return (
    <NavigationContainer>
      {user == null && <Loading />}
      {user == false && <Auth />}
      {user == true && <Main />}
    </NavigationContainer>
  );
};
