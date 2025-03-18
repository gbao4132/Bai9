import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Card, Title } from 'react-native-paper';
import { AppContext } from '../context/AppContext';

const ProfileScreen = ({ navigation }) => {
  const { setIsLoggedIn, userInfo } = useContext(AppContext); // Lấy userInfo từ AppContext

  const handleSignOut = () => {
    setIsLoggedIn(false); // Đăng xuất người dùng
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Account</Title>
          <Text style={styles.name}>{userInfo?.email}</Text> {/* Hiển thị email người dùng */}
          <Text style={styles.jobTitle}>Mobile Developer</Text>
          <Text style={styles.bio}>
            I have above 5 years of experience in native mobile apps development,
            now I am learning React Native.
          </Text>
          <Button
            mode="contained"
            onPress={handleSignOut}
            style={styles.signOutButton}
          >
            Sign Out
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  card: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  jobTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
    textAlign: 'center',
  },
  bio: {
    fontSize: 14,
    color: '#444',
    marginBottom: 24,
    textAlign: 'center',
  },
  signOutButton: {
    marginTop: 16,
  },
});

export default ProfileScreen;