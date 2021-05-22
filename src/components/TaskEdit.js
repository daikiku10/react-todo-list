import React, { useState } from 'react'
import { editTask } from '../actions/action'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Container, TextField } from '@material-ui/core'
import {
  BrowserRouter as Router,
  useHistory
} from 'react-router-dom';

const tasksSelector = state => state.task.tasks

const TaskEdit = () => {
  const history = useHistory();
  const handleLink = path => history.push(path)
  const {taskId} = useParams()
  const taskIdNum = Number(taskId);
  const tasks = useSelector(tasksSelector)
  const taskNum = tasks.findIndex(task => task.id === taskIdNum)
  const todo = tasks[taskNum]
  
  const [task,setTask] = useState(todo.title)
  const [taskDes, setTaskDes] = useState(todo.taskDes)
  const [person, setPerson] = useState(todo.person)
  const [deadLine, setDeadLine] = useState(todo.deadLine)
  const [startLine, setStartLine] = useState(todo.startLine)
  const dispatch = useDispatch();


  const createTask = e => {
    setTask(e.target.value)
  }
  const createTaskDes = e => {
    setTaskDes(e.target.value)    
  }
  const createPerson = e => {
    setPerson(e.target.value)    
  }
  const createDeadLine = e => {
    setDeadLine(e.target.value)    
  }
  const createStartLine = e => {
    setStartLine(e.target.value)    
  }

  const dataTask = () => {
    let data = {
      id: todo.id,
      title:task,
      taskDes:taskDes,
      person:person,
      deadLine:deadLine,
      startLine:startLine,
      flg:false
    }
    dispatch(editTask(data))
    handleLink('/')
  }


  return(
    <>
      <Container maxWidth="sm">
        <h1>編集</h1>
          <div>
            <TextField label="タスク" autoComplete="current-password" variant="outlined" value={task} onChange={createTask}></TextField>
          </div>
          <div>
            <label>詳細</label>
            <input type="textarea" value={taskDes} onChange={createTaskDes}/>
          </div>
          <div>
            <label>担当者</label>
            <input type="text" value={person} onChange={createPerson} />
          </div>
          <div>
            <label>期日</label>
            <input type="date" value={deadLine} onChange={createDeadLine} />
          </div>
          <div>
            <label>開始日</label>
            <input type="date" value={startLine} onChange={createStartLine} />
          </div>
        <Router>
          <button onClick={dataTask}>保存</button>
          <button onClick={() => handleLink('/')}>一覧へ戻る</button>
        </Router>

      </Container>
    </>
  )
}

export default TaskEdit