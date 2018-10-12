import React, { Fragment } from 'react'
import { Grid } from '@material-ui/core/'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import SetCard from './SetCard'

const style = theme => {
  return {
    gridContainer: {
      width: '95%',
      margin: 0,
      paddingTop: theme.spacing.unit * 4,
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 8,
    }
  }
}

let SetCards = (props) => {
  const { classes } = props
  const sets = props.sets.slice()
  let i = 0
  return <Fragment>
    <Grid container justify="center" className={classes.gridContainer} spacing={24}>
      {sets.sort((a,b)=>{
        return a.name>b.name
      }).map((setData) => {
          i++
          return <Grid key={i} item xs={12} sm={6} md={4} xl={3}>
            <SetCard setData={setData} />
          </Grid>
        }
      )}
      </Grid>
    </Fragment>
}

const mapStateToProps = (state, props) => {
  return {
    sets: state.sets,
  }
}

SetCards = withStyles(style)(SetCards)
export default connect(mapStateToProps)(SetCards)