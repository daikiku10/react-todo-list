import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Button, ListItemIcon, ListItem, ListItemText, Checkbox, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import {
  BrowserRouter as Router,
  useHistory
} from 'react-router-dom';
import { changeFlg, removeTask } from '../actions/action';
const tasksSelector = state => state.task.tasks

const TaskView = () => {
  const tasks = useSelector(tasksSelector)
  const dispatch = useDispatch()
  const history = useHistory();
  const handleLink = path => history.push(path)
  console.log(tasks)

  return(
    <>
      <Container maxWidth="sm">
        <h1>ToDo一覧表</h1>
        <Router>
          <Button variant="contained" color="primary" disableElevation onClick={() => handleLink('/new_task')}>
            新規タスク作成
          </Button>
          <div>
              {tasks.map((task, index) => {
                return (
                  <ListItem dense button key={index} >
                    <ListItemIcon onClick={() => dispatch(changeFlg(task,index))}>
                      <Checkbox edge="start" disableRipple checked={task.flg}/>
                    </ListItemIcon>
                    <ListItemText primary={`${index+1}.${task.title}`} onClick={() => handleLink(`/details_task/${task.id}`)}/>
                    <ListItemText primary={task.person} onClick={() => handleLink(`/details_task/${task.id}`)}/>
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="commnets" onClick={() => dispatch(removeTask(index))}>
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                )
              })}
          </div>
        </Router>
      </Container>
    </>
  )
}

export default TaskView