// Import dependencies
import * as React from 'react';
// Import components
import TodoForm from '../containers/TodoForm';
import TodoList from '../containers/TodoList';
// Import interfaces
import {TodoInterface} from '../../interface/interface';
// Import styles
import {SafeAreaView, TouchableOpacity, Text} from 'react-native';
import {LogoutValidateImp} from '../../interface/Auth/index';
// TodoListApp component
const Todos = (props: LogoutValidateImp) => {
  const [todos, setTodos] = React.useState<TodoInterface[]>([]);
  // Creating new todo item
  function handleTodoCreate(todo: TodoInterface) {
    const newTodosState: TodoInterface[] = [...todos];
    newTodosState.push(todo);
    setTodos(newTodosState);
  }

  function handleTodoUpdate(text: string, id: string) {
    const newTodosState: TodoInterface[] = [...todos];
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.text = text;
    setTodos(newTodosState);
  }

  function handleTodoRemove(id: string) {
    const newTodosState: TodoInterface[] = todos.filter(
      (todo: TodoInterface) => todo.id !== id,
    );
    setTodos(newTodosState);
  }

  function handleTodoComplete(id: string) {
    const newTodosState: TodoInterface[] = [...todos];
    newTodosState.find(
      (todo: TodoInterface) => todo.id === id,
    )!.isCompleted = !newTodosState.find(
      (todo: TodoInterface) => todo.id === id,
    )!.isCompleted;
    // Update todos state
    setTodos(newTodosState);
  }

  function onLogOut() {
    props.onLogOut(false);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <TodoForm todos={todos} handleTodoCreate={handleTodoCreate} />
      <TodoList
        todos={todos}
        handleTodoUpdate={handleTodoUpdate}
        handleTodoRemove={handleTodoRemove}
        handleTodoComplete={handleTodoComplete}
        // handleTodoBlur={handleTodoBlur}
      />
      <TouchableOpacity onPress={onLogOut}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Todos;
