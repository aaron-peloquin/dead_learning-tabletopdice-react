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
    fab: {
      right: theme.spacing.unit * 2,
      top: theme.spacing.unit,
    }
  }
}

let AddNewSet = (props) => {
  const { classes } = props;
  return <Fragment>
    <Button
      aria-label="Create new dice set"
      onClick={()=>{toggleModal("addSet")}}
      variant="fab"
      className={classes.fab}
      color="secondary"
    >
      <AddIcon />
    </Button>
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