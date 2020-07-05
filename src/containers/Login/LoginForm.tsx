import * as React from 'react';
import {LoginImp, LoginValidateImp} from '../../../interface/Auth';
// Import styles
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Alert,
} from 'react-native';
// TodoListApp component
const LoginForm = (props: LoginValidateImp) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onChangeUsername = (text: string) => {
    setUsername(text);
  };

  const onChangePassword = (text: string) => {
    setPassword(text);
  };

  const onLogin = () => {
    const userLogin: LoginImp = {
      username: username,
      password: password,
    };
    const loginValidate = props.onLogin(userLogin);
    Alert.alert(loginValidate ? 'Login Success' : 'Login Fail');
    props.checkValidate(loginValidate);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Text>Welcome to my App</Text>
        </View>
        <TextInput
          placeholder={'Username'}
          onChangeText={onChangeUsername}
          value={username}
        />
        <TextInput
          placeholder={'Password'}
          onChangeText={onChangePassword}
          value={password}
        />
        <TouchableOpacity onPress={onLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginForm;
