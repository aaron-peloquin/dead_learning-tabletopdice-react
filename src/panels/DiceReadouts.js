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
      <Grid container>
        <Grid item xs={5}>
          <Typography variant="title">Rolls</Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography><em>(Display Recent rolls)</em></Typography>
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

export default DiceReadouts