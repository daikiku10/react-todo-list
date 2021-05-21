import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Button, ListItemIcon, ListItem, ListItemText, Checkbox, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import {
  BrowserRouter as Router,
  useHistory
} from 'react-router-dom';
const tasksSelector = state => state.task.tasks

const TaskView = () => {
  const tasks = useSelector(tasksSelector)
  const history = useHistory();
  const handleLink = path => history.push(path)

  return(
    <>
      <Container maxWidth="sm">
        <h1>ToDo一覧表</h1>
        <Router>
          <Button variant="contained" color="primary" disableElevation onClick={() => handleLink('/new_task')}>
            新規タスク作成
          </Button>
          {/* <Switch>
            <Route path='/new_task' component={NewTask} />
          </Switch> */}
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
        </Router>
      </Container>
    </>
  )
}

export default TaskView