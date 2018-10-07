import React from 'react'
import {
  Grid,
  Paper,
} from '@material-ui/core/'
import {
  DiceReadouts,
  StandardArrayOfDice
} from './../panels'
import AddNewSet from './../elements/AddNewSet'
import SetCards from './../elements/SetCards'

function Body() {
  return <Paper>
    <Grid container spacing={0}>
      <Grid item xs={12}><DiceReadouts /></Grid>
      <Grid item xs={12}><StandardArrayOfDice /></Grid>
      <Grid item xs={12} align="right"><AddNewSet /></Grid>
      <Grid item xs={12}><SetCards /></Grid>
    </Grid>
  </Paper>
}

export default Body