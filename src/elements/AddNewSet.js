import React from 'react'
import {
  Button,
  // Grid,
  Modal,
  Paper,
  // Typography,
} from '@material-ui/core/'
import AddIcon from '@material-ui/icons/Add';
import toggleModal from './../storeDispatchers/toggleModal'
import {connect} from 'react-redux'

const AddNewSet = (props) => {
  return <div>
    <Button
      aria-label="Create new dice set"
      onClick={()=>{toggleModal("addSet")}}
      variant="extendedFab"
    >
      <AddIcon />
    </Button>
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={props.status}
      onClose={()=>{toggleModal("addSet")}}
    >
      <Paper>
        Hello, World!
      </Paper>
    </Modal>

  </div>
}

const mapStateToProps = (state, props) => {
  return {
    status: state.modals.addSet
  }
}

export default connect(mapStateToProps)(AddNewSet)