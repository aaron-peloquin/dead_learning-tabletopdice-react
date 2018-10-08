import React, { Fragment } from 'react'
import {
  Button,
  Modal,
  Paper,
} from '@material-ui/core/'
import toggleModal from './../storeDispatchers/toggleModal'
import AddIcon from '@material-ui/icons/Add';
import addSet from './../storeDispatchers/addSet'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';

const style = theme => {
  return {
    fabWrapper: {
      position: "absolute",
      right: theme.spacing.unit * 2,
      bottom: theme.spacing.unit * 2,
    },
    modalContent: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      position: "absolute",
      width: "80%",
      maxWidth: "600px",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[3],
      padding: theme.spacing.unit * 4,
      }
  }
}

let AddNewSet = (props) => {
  const { classes } = props;
  return <Fragment>
    <div className={classes.fabWrapper}>
      <Button
        aria-label="Create new dice set"
        onClick={()=>{addSet()}}
        variant="fab"
        color="primary"
      >
        <AddIcon />
      </Button>
    </div>
    {/* <Modal
      aria-labelledby="Create new dice set"
      aria-describedby="Use this form to create a new dice set card"
      open={props.status}
      onClose={()=>{toggleModal("addSet")}}
    >
      <Paper className={classes.modalContent}>
        Test
      </Paper>
    </Modal> */}
  </Fragment>
}

const mapStateToProps = (state, props) => {
  return {
    status: false
  }
}

AddNewSet = withStyles(style)(AddNewSet)
export default connect(mapStateToProps)(AddNewSet)