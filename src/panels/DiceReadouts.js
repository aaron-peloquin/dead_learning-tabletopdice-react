import React from 'react'
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  Grid,
} from '@material-ui/core/'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const DiceReadouts = (props, state) => {
console.log("props:  ", typeof props, props);
console.log("state:  ", typeof state, state);
  return <ExpansionPanel>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      Roll History
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Grid container spacing={24}>
        <Grid item xs={12}><Typography>Full History</Typography></Grid>
        <Grid item xs={6}><Typography>Average</Typography></Grid>
        <Grid item xs={6}><Typography>High/Low</Typography></Grid>
      </Grid>
    </ExpansionPanelDetails>
  </ExpansionPanel>
}

export default DiceReadouts