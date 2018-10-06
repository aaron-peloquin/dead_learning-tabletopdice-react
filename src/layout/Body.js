import React from 'react'
import {
  Paper
} from '@material-ui/core/'
import DiceReadouts from './../panels/DiceReadouts'
import StandardArrayOfDice from './../panels/StandardArrayOfDice'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  }
})

function Body() {
  return <Paper>
    <DiceReadouts />
    <StandardArrayOfDice />
  </Paper>
}

export default withStyles(styles)(Body)