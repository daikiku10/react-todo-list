import React from 'react'
import { Container, Button } from '@material-ui/core';


const TaskView = () => {
  return(
    <>
      <Container maxWidth="sm">
        <h1>ToDo一覧表</h1>
        <Button variant="contained" color="primary" disableElevation>
          新規タスク作成
        </Button>
        <div>
          <ul>

          </ul>
        </div>
      </Container>
    </>
  )
}

export default TaskView