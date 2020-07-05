// Import dependencies
import * as React from 'react';
// Import interfaces
import {TodoItemInterface} from '../../interface/interface';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
// TodoItem component
const TodoItem = (props: TodoItemInterface) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.handleTodoComplete(props.todo.id)}>
        {props.todo.isCompleted ? <Text>Checked</Text> : <Text>Unchecked</Text>}
      </TouchableOpacity>
      <View>
        <TextInput
          value={props.todo.text}
          // onBlur={props.handleTodoBlur}
          onChange={(value) => props.handleTodoUpdate(value, props.todo.id)}
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => props.handleTodoRemove(props.todo.id)}>
          <Text>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lighter,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  input: {
    width: '100%',
  },
});

export default TodoItem;
