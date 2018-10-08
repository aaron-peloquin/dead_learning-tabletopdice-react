import React from 'react'
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Grid,
} from '@material-ui/core/'
import { withStyles } from '@material-ui/core/styles'
const style = theme => {
  return {
    pageHeading: {
      color: "#FFF",
    }
  }
}

const Header = (props) => {
  const { classes } = props
  return <AppBar position="static" color="primary">
      <Toolbar>
        <Grid container>
          <Grid item xs={8}>
            <Typography variant="headline" align="left" className={classes.pageHeading}>Tabletop Dice</Typography>
          </Grid>
          <Grid item xs={4} align="right">
          <a href="https://goo.gl/forms/HIDWZP4VsafmbQTA2" target="_blank" rel="noopener noreferrer"><Button variant="contained">Feedback</Button></a>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
}

export default withStyles(style)(Header)