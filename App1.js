import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ProgressViewIOS, ProgressBarAndroid, Button, Alert, Dimensions, Platform } from 'react-native';

const {height, width} = Dimensions.get("window");

export default function App() {
  const onButtonPress = () => {
    console.log(`${new Date().toLocaleTimeString()} button press`)
  };
  return (
    <View style={{padding: 50}}>
      <Text>ready...</Text>
      {Platform.OS === "ios" && <ProgressViewIOS progress={0.8}/>}
      {Platform.OS === "android" && 
      <ProgressBarAndroid 
        progress={0.8}
        styleAttr="Horizontal"
        indeterminate={false}
        color="blue"
      />}
      <ActivityIndicator size="large" color="#61DBFB"/>
      <Button title="click me" onPress={onButtonPress}/>
      <Text>OS: {Platform.OS}</Text>
      <Text>Height: {height}</Text>
      <Text>Width: {width}</Text>
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
