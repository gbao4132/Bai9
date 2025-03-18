import React, { useState, useContext } from 'react';
import { View, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Sử dụng thư viện vector icons
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../context/AppContext';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { setIsLoggedIn, setUserInfo } = useContext(AppContext);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      const savedEmail = await AsyncStorage.getItem('userEmail');
      const savedPassword = await AsyncStorage.getItem('userPassword');

      if (email === savedEmail && password === savedPassword) {
        setIsLoggedIn(true);
        setUserInfo({ email });
      } else {
        Alert.alert('Error', 'Invalid email or password');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to retrieve user data');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    Alert.alert('Info', 'Google login clicked');
    // Thêm logic đăng nhập bằng Google tại đây
  };

  const handleFacebookLogin = () => {
    Alert.alert('Info', 'Facebook login clicked');
    // Thêm logic đăng nhập bằng Facebook tại đây
  };

  return (
    <View style={styles.container}>
      {/* Email Input */}
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={styles.input}
        keyboardType="email-address"
      />

      {/* Password Input */}
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        style={styles.input}
        secureTextEntry
      />

      {/* Login Button */}
      <Button
        mode="contained"
        onPress={handleLogin}
        loading={loading}
        disabled={loading}
        style={styles.button}
      >
        Login
      </Button>

      {/* Forgot Password Link */}
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.linkText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Social Login Buttons */}
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
          <Icon name="google" size={24} color="#DB4437" />
          <Text style={styles.socialButtonText}>Login with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton} onPress={handleFacebookLogin}>
          <Icon name="facebook" size={24} color="#4267B2" />
          <Text style={styles.socialButtonText}>Login with Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Sign Up Link */}
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
  linkText: {
    color: '#6200ee',
    textAlign: 'center',
    marginTop: 8,
  },
  socialButtonsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '80%',
    justifyContent: 'center',
  },
  socialButtonText: {
    marginLeft: 10,
    color: '#000',
  },
});

export default LoginScreen;