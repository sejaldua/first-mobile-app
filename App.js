import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ProgressViewIOS, Button } from 'react-native';

export default function App() {
  const onButtonPress = () => {
    console.log(`${new Date().toLocaleTimeString()} button press`)
  };
  return (
    <View style={{padding: 50}}>
      <Text>ready...</Text>
      <ProgressViewIOS progress={0.8}/>
      <ActivityIndicator size="large" color="#61DBFB"/>
      <Button title="click me" onPress={onButtonPress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
