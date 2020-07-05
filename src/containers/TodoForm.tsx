// Import dependencies
import * as React from 'react';
// Import interfaces
import {TodoInterface, TodoFormInterface} from '../../interface/interface';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
// Todo form component
const TodoForm = (props: TodoFormInterface) => {
  // Create ref for form input
  const inputRef = React.useRef(null);
  const [formState, setFormState] = React.useState('');

  const handleInputChange = (value: React.SetStateAction<string>) => {
    setFormState(value);
  };
  // Handle 'Enter' in todo input
  function handleInputEnter() {
    const newTodo: TodoInterface = {
      id: Math.random().toString(),
      text: formState,
      isCompleted: false,
    };
    // Create new todo item
    props.handleTodoCreate(newTodo);
    // Reset the input field
    setFormState('');
  }

  return (
    <View>
      <TextInput
        ref={inputRef}
        value={formState}
        placeholder="Enter new todo"
        onChangeText={(value) => {
          handleInputChange(value);
        }}
      />
      <TouchableOpacity onPress={handleInputEnter}>
        <Text>Press</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoForm;
