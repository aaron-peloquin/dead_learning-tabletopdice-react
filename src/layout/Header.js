import React from 'react'
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Grid,
  Button
} from '@material-ui/core/'
import Settings from './../modals/Settings'


function Header(PropTypes) {
  return <AppBar position="static" color="primary">
      <Toolbar>
      <Grid container>
          <Grid item sm>
          <Typography variant="headline" color="textPrimary" align="center">Tabletop Dice</Typography>
          </Grid>
          <Grid item sm>
            <Settings />
          </Grid>
          <Grid item sm>
            <Button color="secondary" variant="contained">Settings</Button>
          </Grid>
      </Grid>
      </Toolbar>
    </AppBar>
}

export default Header
