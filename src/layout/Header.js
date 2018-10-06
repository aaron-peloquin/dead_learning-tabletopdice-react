import React from 'react'
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
} from '@material-ui/core/'

function Header() {
  return <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="headline" color="textSecondary" align="left">Tabletop Dice</Typography>
      </Toolbar>
    </AppBar>
}

export default Header