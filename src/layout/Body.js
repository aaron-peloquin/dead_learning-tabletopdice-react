import React, { Fragment } from 'react'
import {
  Grid
} from '@material-ui/core/'
import {
  DiceReadouts,
  StandardArrayOfDice
} from './../panels'
import AddNewSet from './../elements/AddNewSet'
import SetCards from './../elements/SetCards'

function Body() {
  return <Fragment>
    <Grid container spacing={0}>
      <Grid item xs={12}><DiceReadouts /></Grid>
      <Grid item xs={12}><StandardArrayOfDice /></Grid>
      <Grid item xs={12} align="right"><AddNewSet /></Grid>
      <Grid item xs={12}><SetCards /></Grid>
    </Grid>
    
    
  </Fragment>
}

export default Body