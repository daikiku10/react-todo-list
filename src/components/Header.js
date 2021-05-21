import React from 'react'
import { AppBar, Container, Typography } from '@material-ui/core';


const Header = () => {
  return(
    <AppBar position="static">
      <Typography variant="h6">
        ToDoリスト
      </Typography>
    </AppBar>
  )
}

export default Header