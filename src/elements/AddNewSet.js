import React, { Fragment } from 'react'
import {
  Button,
} from '@material-ui/core/'
import AddIcon from '@material-ui/icons/Add';
import addSet from './../storeDispatchers/addSet'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';

const style = theme => {
  return {
    fabWrapper: {
      position: "fixed",
      right: theme.spacing.unit * 2,
      bottom: theme.spacing.unit * 4,
    },
  }
}

let AddNewSet = (props) => {
  const { classes, activlyEditing } = props;
  if(activlyEditing) {
    return <Fragment />
  }

  return <Fragment>
    <div className={classes.fabWrapper}>
      <Button
        aria-label="Create new dice set"
        onClick={addSet}
        variant="fab"
        color="primary"
      >
        <AddIcon />
      </Button>
    </div>
  </Fragment>
}

const mapStateToProps = (state, props) => {
  const { setEditStatus = [] } = state
  let editing = false
  if(setEditStatus.length>0){
    editing = setEditStatus.some((val)=>{
      return val===true
    })
  }

  return {
    activlyEditing: editing
  }
}

AddNewSet = withStyles(style)(AddNewSet)
export default connect(mapStateToProps)(AddNewSet)