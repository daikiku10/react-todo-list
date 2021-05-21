import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Button, ListItemIcon, ListItem, ListItemText, Checkbox, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
const tasksSelector = state => state.task.tasks

const TaskView = () => {
  const tasks = useSelector(tasksSelector)
  console.log(tasks)

  return(
    <>
      <Container maxWidth="sm">
        <h1>ToDo一覧表</h1>
        <Button variant="contained" color="primary" disableElevation>
          新規タスク作成
        </Button>
        <div>
            {tasks.map((task, index) => {
              return (
                <ListItem dense button key={index}>
                  <ListItemIcon>
                    <Checkbox edge="start" disableRipple />
                  </ListItemIcon>
                  <ListItemText primary={`${index+1}.${task.title}`} />
                  <ListItemText primary={task.person} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="commnets">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              )
            })}
        </div>
      </Container>
    </>
  )
}

export default TaskView