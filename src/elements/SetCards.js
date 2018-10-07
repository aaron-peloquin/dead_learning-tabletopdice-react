import React, { Fragment } from 'react'
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Paper,
  Typography,
  Button,
} from '@material-ui/core/'
import { connect } from 'react-redux'

const fakeData = [
  {name: "Short Sword", primary: "1d20+5", secondary: "1d6+3", note: "A short sword"},
  {name: "Spear", primary: "1d20+5", secondary: "1d6+3", note: "A wooden spear"},
  {name: "Dagger", primary: "1d20+5", secondary: "1d4+3", note: "A sly dagger"},
  {name: "Short Sword", primary: "1d20+5", secondary: "1d6+3", note: "A short sword"},
  {name: "Spear", primary: "1d20+5", secondary: "1d6+3", note: "A wooden spear"},
]

let SetCards = (props) => {
  return <Fragment>
    <Grid container justify="center" spacing={24}>
      {fakeData.map(dataObj => <Grid item xs={5}>
        <Card>
        <CardContent>
          <Typography variant="headline">{dataObj.name}</Typography>
          <Typography variant="subheading">{dataObj.note}</Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="secondary">Roll</Button>
        </CardActions>
        </Card>
      </Grid>)}
    </Grid>
  </Fragment>
}

const mapStateToProps = (state, props) => {
  return {
    status: state.sets
  }
}

export default connect(mapStateToProps)(SetCards)