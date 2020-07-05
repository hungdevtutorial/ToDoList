import * as React from 'react';
import TodoItem from './TodoItem';
import {TodoListInterface} from '../../interface/interface';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const TodoList = (props: TodoListInterface) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {props.todos.map((todo) => (
          <View key={todo.id}>
            <TodoItem
              todo={todo}
              handleTodoUpdate={props.handleTodoUpdate}
              handleTodoRemove={props.handleTodoRemove}
              handleTodoComplete={props.handleTodoComplete}
              // handleTodoBlur={props.handleTodoBlur}
            />
          </View>
        ))}
      </ScrollView>
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
});

export default TodoList;
