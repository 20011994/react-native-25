    import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Justdial Dashboard</Text>
      <Text style={styles.subtext}>You are now logged in.</Text>

      {/* Extend with more sections, like profile, services, logout */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Logout or open profile')}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff6600',
    marginBottom: 20,
  },
  subtext: {
    fontSize: 16,
    color: '#555',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#ff6600',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
