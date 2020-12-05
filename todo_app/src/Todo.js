import React, {useState} from 'react'
import './Todo.css';
import {List, ListItem, ListItemText, ListItemAvatar, Avatar, Modal, Button} from "@material-ui/core"
import db from './firebase'
import {makeStyles} from '@material-ui/core/styles'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles ((theme) => ({
  paper: {
    position: 'absolute',
    widht: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2,4,3),
  },
}));

//this is a prop
function Todo(props) {
  const classes = useStyles();
  const [open,setOpen] = useState(false);
  const [input, setInput]= useState();

  const handleOpen =()=>{
    setOpen(true)
  };

  const updateTodo=(event)=>{
    //updateTodo here with a new inputText
    event.preventDefault(); //prevents page refresh
    db.collection('todos').doc(props.todo.id).set({
      todo: input
    },{merge: true});
    setOpen(false);
  }

  return (
    <>

    <Modal
      open={open}
      onClose={e => setOpen(false)}
      >
        <form>
      <div className ={classes.paper}>
        <h1>I am a modal</h1>
          <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
        <Button onClick={updateTodo}>Update todo</Button>

      </div>
      </form>

      </Modal>
    <List  >
    <ListItem >
      <ListItemAvatar>
      </ListItemAvatar>
        <ListItemText primary ={props.todo.todo} secondary="dummy deadline" />
      </ListItem>
      <button class="edit" onClick={e => setOpen(true)} >Edit</button>
      <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
    </List>
    </>
  )
}

export default Todo
