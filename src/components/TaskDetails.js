import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Container, Divider, Grid, Typography } from '@material-ui/core'
import {
  BrowserRouter as Router,
  useHistory
} from 'react-router-dom';



const tasksSelector = state => state.task.tasks


const TaskDetails = () => {
  const {taskId} = useParams()
  const taskIdNum = Number(taskId);
  const tasks = useSelector(tasksSelector)
  const taskNum = tasks.findIndex(task => task.id === taskIdNum)
  const task = tasks[taskNum]
  const history = useHistory();
  const handleLink = path => history.push(path)

  const checkFlg = () => {
    if(task.flg){
      return <>進捗：完了</>
    }else {
      return <>進捗：未完了</>
    }
  }

  return (
    <>
      <Container maxWidth="sm">
        <h1>タスク詳細表示</h1>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4">
              {task.title}
            </Typography>
            <Grid item>
              <Typography gutterBottom variant="h6">
                担当者：{task.person}
              </Typography>
              <Typography gutterBottom variant="h6">
                {checkFlg()}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Typography variant="body1">
          備考：{task.taskDes}
        </Typography>
        <Divider variant="middle"/>
        <Typography gutterBottom variant="body2">
          開始日：{task.startLine}
        </Typography>
        <Typography gutterBottom variant="body2">
          期日：{task.deadLine}
        </Typography>
        <Router>
          <button onClick={() => handleLink(`/edit_task/${taskId}`)}>編集</button>
          <button onClick={() => handleLink('/')}>一覧へ戻る</button>
        </Router>
      </Container>
    </>
  )
}

export default TaskDetails