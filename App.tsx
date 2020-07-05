import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Login from './src/containers/Login/Auth';
// TodoListApp component
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Login />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
export default App;
