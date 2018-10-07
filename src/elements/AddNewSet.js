import React, { Fragment } from 'react'
import {
  Button,
  // Grid,
  Modal,
  Paper,
  Typography,
} from '@material-ui/core/'
import AddIcon from '@material-ui/icons/Add';
import toggleModal from './../storeDispatchers/toggleModal'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';

const style = theme => {
  return {
    fabWrapper: {
      position: "absolute",
      right: theme.spacing.unit * 2,
      bottom: theme.spacing.unit * 2,
    }
  }
}

let AddNewSet = (props) => {
  const { classes } = props;
  return <Fragment>
    <div className={classes.fabWrapper}>
      <Button
        aria-label="Create new dice set"
        onClick={()=>{toggleModal("addSet")}}
        variant="fab"
        color="primary"
      >
        <AddIcon />
      </Button>
    </div>
    <Modal
      aria-labelledby="Create new dice set"
      aria-describedby="Use this form to create a new dice set card"
      open={props.status}
      onClose={()=>{toggleModal("addSet")}}
    >
      <Paper>
        <Typography>Hello, World!</Typography>
      </Paper>
    </Modal>
  </Fragment>
}

const mapStateToProps = (state, props) => {
  return {
    status: state.modals.addSet
  }
}

AddNewSet = withStyles(style)(AddNewSet)
export default connect(mapStateToProps)(AddNewSet)