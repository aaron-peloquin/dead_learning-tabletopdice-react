import React, {Fragment} from 'react'
import {
  Button,
  Card, CardActions, CardContent,
  TextField,
  Typography,
} from '@material-ui/core/'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'
import toggleSetEditStatus from './../storeDispatchers/toggleSetEditStatus'
import updateSet from './../storeDispatchers/updateSet'
import deleteSet from './../storeDispatchers/deleteSet'

const styles = theme => {
  return {
    editAction: {
      position: "relative",
      float: "right",
      flexDirection: "column",
    },
    rollAction: {
      display: "grid",
      justifyContent: "right",
    },
    delete: {
      marginTop: "15px",
    }
  }
}

let SetCard = props => {
  let { setId, editStatus, setData, classes } = props

  /** Create internal update methods for each key of setData */
  const update = {
    name: (e)=>{updateSet({id:setId, key:"name", newValue:e.target.value})},
    note: (e)=>{updateSet({id:setId, key:"note", newValue:e.target.value})},
    primary: (e)=>{updateSet({id:setId, key:"primary", newValue:e.target.value})},
    secondary: (e)=>{updateSet({id:setId, key:"secondary", newValue:e.target.value})},
  }

  let contents, editIcon, remove, rollButton
  if(editStatus) {
    // let editData = Object.assign(setData)
    editIcon = <Icon>save_icon</Icon>
    remove = <Button onClick={()=>{deleteSet(setId)}} variant="fab" color="secondary" className={classes.delete}><Icon>delete_icon</Icon></Button>
    contents = <div>
      <TextField onChange={update.name} defaultValue={setData.name} placeholder="Label" />
      <TextField onChange={update.note} defaultValue={setData.note} placeholder="Note" multiline />
      <TextField onChange={update.primary} defaultValue={setData.primary} placeholder="1d20+5" />
      <TextField onChange={update.secondary} defaultValue={setData.secondary} placeholder="1d8+4" />
    </div>
  }
  else {
    editIcon = <Icon>edit_icon</Icon>
    contents = <Fragment>
      <Typography variant="headline">{setData.name}</Typography>
      <Typography variant="subheading">{setData.note}</Typography>
    </Fragment>
    if(setData.primary!=='' || setData.secondary!=='') {
      rollButton = <Button variant="contained" color="secondary">Roll</Button>
    }
  }

  return <Card>
    <CardActions className={classes.editAction}>
      <Button onClick={()=>{toggleSetEditStatus(setId)}} variant="fab" color="primary">{editIcon}</Button>
      {remove}
    </CardActions>
    <CardContent>{contents}</CardContent>
    <CardActions className={classes.rollAction}>{rollButton}</CardActions>
    </Card>
}

const mapStateToProps = (state, props) => {
  return {
    editStatus: !!state.setEditStatus[props.setId],
    setData: state.sets[props.setId],
  }
}

SetCard = withStyles(styles)(SetCard)
export default connect(mapStateToProps)(SetCard)