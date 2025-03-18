import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppProvider, AppContext } from './context/AppContext';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import MainTabScreen from './navigation/MainTab';

const Stack = createStackNavigator();


const AppContent = () => {
  const { isLoggedIn } = React.useContext(AppContext);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <MainTabScreen />
      ) : (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

// Component App chính
const App = () => (
  <AppProvider>
    <AppContent />
  </AppProvider>
);

export default App;