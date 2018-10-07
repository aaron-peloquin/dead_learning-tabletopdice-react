import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  Grid,
} from '@material-ui/core/'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const recentRollResults = (rolls, limit=3) => {
  const displayRolls = rolls.reverse().splice(0,limit)
  return <Fragment>
    {displayRolls.map((r)=>{
      return <Fragment><strong>{r.result} rolled </strong> ({r.sides} sides) </Fragment>
    })}
  </Fragment>
}

const DiceReadouts = (props) => {
  return <ExpansionPanel>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <Grid container>
        <Grid item xs={5}>
          <Typography variant="title">Rolls</Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography variant="subheading">{recentRollResults(props.rolls)}</Typography>
        </Grid>
      </Grid>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Grid container spacing={24}>
        <Grid item xs={12}><Typography>Full History</Typography></Grid>
        <Grid item xs={4}><Typography>Total</Typography></Grid>
        <Grid item xs={4}><Typography>Average</Typography></Grid>
        <Grid item xs={4}><Typography>High/Low</Typography></Grid>
      </Grid>
    </ExpansionPanelDetails>
  </ExpansionPanel>
}

const mapStateToProps = (state, props) => {
  return {
    rolls: state.rolls
  }
}

export default connect(mapStateToProps)(DiceReadouts)