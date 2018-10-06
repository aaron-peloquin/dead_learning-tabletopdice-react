import React, { Fragment } from 'react'
import {
  Paper
} from '@material-ui/core/'
import DiceReadouts from './../panels/DiceReadouts'
import StandardArrayOfDice from './../panels/StandardArrayOfDice'

function Body() {
  return <Fragment>
    <DiceReadouts />
    <StandardArrayOfDice />
  </Fragment>
}

export default Body