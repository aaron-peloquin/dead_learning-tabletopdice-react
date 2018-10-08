import React, {Fragment} from 'react'
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core/'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon';
import toggleSetEditStatus from './../storeDispatchers/toggleSetEditStatus'

const styles = theme => {
  return {
    editAction: {
      position: "relative",
      float: "right",
    },
    rollAction: {
      display: "grid",
      justifyContent: "right",
    }
  }
}

let SetCard = props => {
  const { setId, editStatus, setData, classes } = props
  console.log("props.editStatus", editStatus)

  let contents = <Fragment />
  let edit = <Fragment />
  if(editStatus) {
    edit = `Save`
  }
  else {
    edit = `Edit`
  }

  return <Card>
    <CardActions className={classes.editAction}>
      <Button onClick={()=>{toggleSetEditStatus(setId)}} variant="contained" color="secondary">{edit}</Button>
    </CardActions>
    <CardContent>
      <Typography variant="headline">{setData.name}</Typography>
      <Typography variant="subheading">{setData.note}</Typography>
    </CardContent>
    <CardActions className={classes.rollAction}>
      <Button
        variant="contained"
        color="secondary"
      >Roll</Button>
    </CardActions>
    </Card>
}

const mapStateToProps = (state, props) => {
  console.log("SetCard[props].setId", props.setId)
  return {
    editStatus: !!state.setEditStatus[props.setId],
    setData: state.sets[props.setId],
  }
}

SetCard = withStyles(styles)(SetCard)
export default connect(mapStateToProps)(SetCard)