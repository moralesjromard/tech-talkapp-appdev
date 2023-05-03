import React, { Component, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';

// screens
import LoginScreen from './screens/Login/Login';
import RegisterScreen from './screens/Register/Register';
import HomeScreen from './screens/Home/Home';
import { getStorage } from './helper/storage';
import AuthContext, { AuthProvider } from './contexts/ContextProvider';

const Stack = createNativeStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
  }

  static contextType = AuthContext;
  render() {
    const { user, logIn, logOut } = this.context;
    console.log(user);
    // hide warning (nag wawarning siya dahil every second nagtitrigger yung get all posts na request)
    LogBox.ignoreLogs(['Warning: ...']);
    LogBox.ignoreAllLogs();
    console.disableYellowBox = true;
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {user == null ? (
            <>
              <Stack.Screen
                name='Login'
                component={LoginScreen}
                options={{ animation: user == null ? 'slide_from_right' : null, headerShown: false }}
              />
              <Stack.Screen
                name='Register'
                component={RegisterScreen}
                options={{ animation: user == null ? 'slide_from_right' : null, headerShown: false }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{ animation: 'none', headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
