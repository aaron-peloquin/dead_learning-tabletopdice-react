import React from 'react'
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Grid,
} from '@material-ui/core/'

function Header() {
  return <AppBar position="static" color="primary">
      <Toolbar>
        <Grid container>
          <Grid item xs={8}>
            <Typography variant="headline" color="textSecondary" align="left">Tabletop Dice</Typography>
          </Grid>
          <Grid item xs={4} align="right">
          <a href="https://goo.gl/forms/HIDWZP4VsafmbQTA2" target="_blank" rel="noopener noreferrer"><Button variant="contained">Feedback</Button></a>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
}

export default Header