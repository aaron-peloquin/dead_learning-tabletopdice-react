import React from 'react'
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  Grid,
  Button,
} from '@material-ui/core/'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const StandardArrayOfDice = (props, state) => {
console.log("props:  ", typeof props, props);
console.log("state:  ", typeof state, state);
  return <ExpansionPanel>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="title">Dice</Typography>
        </Grid>
      </Grid>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Grid container spacing={24}>
        <Grid item xs={4}><Button variant="outlined" fullWidth fullHeight><Typography>D4</Typography></Button></Grid>
        <Grid item xs={4}><Button variant="outlined" fullWidth><Typography>D6</Typography></Button></Grid>
        <Grid item xs={4}><Button variant="outlined" fullWidth><Typography>D8</Typography></Button></Grid>
        <Grid item xs={4}><Button variant="outlined" fullWidth><Typography>D10</Typography></Button></Grid>
        <Grid item xs={4}><Button variant="outlined" fullWidth><Typography>D12</Typography></Button></Grid>
        <Grid item xs={4}><Button variant="outlined" fullWidth><Typography>D20</Typography></Button></Grid>
      </Grid>
    </ExpansionPanelDetails>
  </ExpansionPanel>
}

export default StandardArrayOfDice