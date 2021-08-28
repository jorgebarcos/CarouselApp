import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'#162252'} />
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
