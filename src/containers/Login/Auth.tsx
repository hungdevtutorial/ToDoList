import * as React from 'react';
import {LoginImp} from '../../../interface/Auth';
// Import styles
import {SafeAreaView, StyleSheet} from 'react-native';
import LoginForm from './LoginForm';
import Todos from '../Todos';
// TodoListApp component
const Login = () => {
  const [checkAuth, setCheckAuth] = React.useState(false);
  // Creating new todo item
  const onLogin = (userLogin: LoginImp) => {
    return userLogin.username !== '' && userLogin.password !== ''
      ? true
      : false;
  };

  const checkValidate = (loginValidate: boolean) => {
    setCheckAuth(loginValidate);
  };

  const onLogOut = (logOut: boolean) => {
    setCheckAuth(logOut);
  };
  return (
    <SafeAreaView style={styles.container}>
      {checkAuth ? (
        <Todos onLogOut={onLogOut} />
      ) : (
        <LoginForm onLogin={onLogin} checkValidate={checkValidate} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Login;
