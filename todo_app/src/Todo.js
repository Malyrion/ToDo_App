import React from 'react'
import './Todo.css';
import {List, ListItem, ListItemText, ListItemAvatar, Avatar} from "@material-ui/core"
//this is a prop
function Todo(props) {
  return (
    <List className ="todo_list">
    <ListItem>
      <ListItemAvatar>
      </ListItemAvatar>
        <ListItemText primary ={props.text} secondary="dummy dealine" />
      </ListItem>
    </List>
  )
}

export default Todo
