import React, { useState } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';


class Dashboard extends React.Component {
  state = {
  };
  render() {
    return (
      <View  style={styles.container}>
        <Text>Logado</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Dashboard;