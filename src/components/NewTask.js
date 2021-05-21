import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../actions/action'
import { Container, TextField } from '@material-ui/core'
import {
  BrowserRouter as Router,
  useHistory
} from 'react-router-dom';


const NewTask = () => {
  const [task,setTask] = useState('')
  const [taskDes, setTaskDes] = useState('')
  const [person, setPerson] = useState('')
  const [deadLine, setDeadLine] = useState('')
  const [startLine, setStartLine] = useState('')
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLink = path => history.push(path)

  
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
      id: new Date().getTime(),
      title:task,
      taskDes:taskDes,
      person:person,
      deadLine:deadLine,
      startLine:startLine,
      flg:false
    }
    dispatch(addTask(data))
    handleLink('/')
  }
  return(
    <>
      <Container maxWidth="sm">
        <h1>新規タスク作成</h1>
        <div>
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
            <button onClick={dataTask}>タスク作成</button>
            <button onClick={() => handleLink('/')}>一覧へ戻る</button>
          </Router>
        </div>
      </Container>
    </>
  )
}

export default NewTask