import { Text, View, StyleSheet, Image, Button } from 'react-native'
import React, { Component, useState } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import * as Google from 'expo-google-app-auth';
import * as WebBrowser from 'expo-web-browser';
import { ResponseType } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithCredential, signInWithPopup } from 'firebase/auth';
import { material } from 'react-native-typography'
import "@fontsource/luckiest-guy"; 

const AppButton = ({ onPress, icon, title, backgroundColor, styleBack }) => (
    <View style={styles.appButtonContainer}>
      <Icon.Button
        name={icon}
        backgroundColor={backgroundColor}
        onPress={onPress}
        // style={styles.appButton}
        style={styleBack}

      >
        <Text style={styles.appButtonText}>{title}</Text>
      </Icon.Button>
    </View>
  );

WebBrowser.maybeCompleteAuthSession();

export default function ({ navigation }) {
    const [accessToken, setAccessToken] = React.useState();
    const [userInfo, setUserInfo] = React.useState();
    const [loading, setLoading] = useState(false);

    const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
      {
        clientId: '227196084425-5e8po5oe7uoa5dk4staia1dgukmp58eq.apps.googleusercontent.com',
        },
    );

    async function GoogleLogin() {
      setLoading(true);
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      }).catch((error) => {
        setLoading(false);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    }
    

    React.useEffect(() => {
      setLoading(true);
      if (response?.type === 'success') {
        const { id_token } = response.params;
        
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        const credential = provider.credential(id_token);
        signInWithCredential(auth, credential);
      }
    }, [response]);
  


  

    return (
      <View
        style={{ 
           flex: 1,
            backgroundColor: '#B0CEE3',
            backgroundGradient: "linear",
            backgroundGradientTop: "#B0CEE3"
        }}
      >
        <View
             style={{ 
                marginTop: 80,
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}
        >
          <Text 
            style={{
              fontFamily: 'Luckiest Guy',
              lineHeight: 2,
              fontSize: 25,
              color: 'white',
              stroke: '#BEBEBE',
              textTransform: 'uppercase'
            }}
            
            >Tibetans learning Tibetan</Text>
        <Image
              resizeMode="contain"
              style={{
                marginTop: 40,
                height: 250,
                width: 290,
              }}
              source={require("../../../assets/splash.png")}
            />
        {/* <View
            style={{ 
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 200
            }}
        > */}
        <View style={styles.screenContainer}>
            <AppButton 
              icon="sign-in" 
              title="Continue with Email" 
              backgroundColor="#777"
              styleBack={styles.appButton} 
              onPress={() => { navigation.navigate("Register");}}/>
            <AppButton 
              icon="facebook" 
              title="Continue with Facebook" 
              backgroundColor="#3b5998"
              styleBack={styles.appButton2} 
              onPress={() => { navigation.navigate("Register");}}/>
            <AppButton 
                icon="google" 
                title="Continue with Google" 
                styleBack={styles.appButton3}
                backgroundColor="#14191e" onPress={
                  () => {
                    GoogleLogin()
                  }
                }/>
        </View>
            
        </View>
        </View>
      // </View>
    )
}


const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 120
      },
      appButton: {
        padding: 16,
        paddingLeft: 70,
        paddingRight: 70,
        borderRadius: 20,
      },
      appButton2: {
        padding: 16,
        paddingLeft: 60,
        paddingRight: 60,
        borderRadius: 20,
      },
      appButton3: {
        padding: 16,
        paddingLeft: 65,
        paddingRight: 65,
        borderRadius: 20,
      },
      appButtonText: {
        fontSize: 15,
        color: 'white'
      },
      appButtonContainer: {
        paddingVertical: 10,
        paddingHorizontal: 26,
      },
})