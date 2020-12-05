import React, {useState, useEffect} from 'react';
import './App.css';
import Todo from './Todo'
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import db from './firebase'
import firebase from "firebase"
function App() {

// <--! this is a react hook useState the STATE short term memory !-->
const [todos, setTodos] = useState(['abc','def']);
const [input, setInput] = useState('');

//when the app loads we need to listen to the database and fetch new todos as they get added/removed

useEffect(()=> {
  //runs when the app loads, when the component its in
  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
    console.log(snapshot.docs.map(doc=> doc.data()));
    setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
  })
}, []);

const addTodo = (event) => {
  //this will fire off when we click the button
  event.preventDefault(); //it will stop the refresh due to the form tag
  db.collection('todos').add({
    todo: input,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

  // setTodos([...todos, input]);
  setInput("");// clear up the input after the enter
}
  return (
    <div className="App">
      <h1>To-Do App</h1>
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
          <Todo todo={todo}/>
          // <li>{todo}</li>
        ))}
      </ul>

    </div>
  );
}

//to deplay run npm run build and firebase deploy

export default App;
