import React, {useState} from 'react';
import './App.css';
import Todo from './Todo'
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'

function App() {

// <--! this is a react hook useState the STATE short term memory !-->
const [todos, setTodos] = useState([]);
const [input, setInput] = useState('');

const addTodo = (event) => {
  //this will fire off when we click the button
  event.preventDefault(); //it will stop the refresh due to the form tag
  setTodos([...todos, input]);
  setInput("");// clear up the input after the enter
}
  return (
    <div className="App">
      <h1>Hello Worlds </h1>
      {/*form make the enter subbmit the input form the input field*/}
      <form>

        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
            <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>

        <Button disabled={!input} variant="contained" color="primary" type="Subbmit" onClick={addTodo}>
          Add To do
        </Button>
      </form>

      <ul>
        {todos.map(todo =>(
          <Todo text={todo}/>
          // <li>{todo}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
