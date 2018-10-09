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

  let contents, editIcon, rollButton
  if(editStatus) {
    editIcon = <Icon>save_icon</Icon>
    contents = <form>Edit Form</form>
  }
  else {
    editIcon = <Icon>edit_icon</Icon>
    contents = <Fragment>
      <Typography variant="headline">{setData.name}</Typography>
      <Typography variant="subheading">{setData.note}</Typography>
    </Fragment>
    if(setData.primary!='' || setData.secondary!='') {
      rollButton = <Button variant="contained" color="secondary">Roll</Button>
    }
  }

  return <Card>
    <CardActions className={classes.editAction}>
      <Button onClick={()=>{toggleSetEditStatus(setId)}} variant="fab" color="primary">{editIcon}</Button>
    </CardActions>
    <CardContent>{contents}</CardContent>
    <CardActions className={classes.rollAction}>{rollButton}</CardActions>
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