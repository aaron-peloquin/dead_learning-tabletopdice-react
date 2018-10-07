import React, { Fragment } from 'react'
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  Button,
} from '@material-ui/core/'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';

const style = theme => {
  return {
    gridContainer: {
      margin: "0 auto",
      maxWidth: "90%",
    },
    cardButton: {
      justify: "right"
    }
  }
}

const fakeData = [
  {name: "Short Sword", primary: "1d20+5", secondary: "1d6+3", note: "A short sword"},
  {name: "Spear", primary: "1d20+5", secondary: "1d6+3", note: "A wooden spear"},
  {name: "Dagger", primary: "1d20+5", secondary: "1d4+3", note: "A sly dagger"},
  {name: "Short Sword", primary: "1d20+5", secondary: "1d6+3", note: "A short sword"},
  {name: "Spear", primary: "1d20+5", secondary: "1d6+3", note: "A wooden spear"},
]

let SetCards = (props) => {
  const { classes } = props;
  return <Fragment>
    <Grid container justify="center" className={classes.gridContainer} spacing={24}>
      {fakeData.map(dataObj => <Grid item xs={12} sm={6} md={4} xl={3}>
        <Card>
        <CardContent>
          <Typography variant="headline">{dataObj.name}</Typography>
          <Typography variant="subheading">{dataObj.note}</Typography>
        </CardContent>
        <CardActions>
          <Button
            className={classes.cardButton}
            variant="contained"
            color="secondary"
            fullWidth
          >Roll Set</Button>
        </CardActions>
        </Card>
      </Grid>)}
    </Grid>
  </Fragment>
}

const mapStateToProps = (state, props) => {
  return {
    sets: state.sets
  }
}

SetCards = withStyles(style)(SetCards)
export default connect(mapStateToProps)(SetCards)