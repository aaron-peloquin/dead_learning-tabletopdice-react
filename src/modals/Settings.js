import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Modal,
  Typography,
} from '@material-ui/core/';
import SettingsIcon from '@material-ui/icons/Settings';
import { connect } from 'react-redux'
import {
  toggleModal
} from './../storeActions/toggleModal'
import modalStyles from './helper-modalStyles'

class SettingsModal extends React.Component {
  /**
   * Assign properties to this element, and bind toggleModal() to this class.
   * @param {obj} props an object of all properties to assign into this element
   */
  constructor(props) {
    super(props)
    this.toggleModal = this.toggleModal.bind(this)
  }

  /** Toggle opening & closing the settings modal */
  toggleModal = () => {
    this.props.toggleModal('settings')
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button color="secondary" onClick={this.toggleModal} variant="extendedFab">
          <SettingsIcon />
        </Button>
        <Modal
          aria-labelledby="settings-modal-title"
          aria-describedby="settings-modal-description"
          open={this.props.open}
          onClose={this.toggleModal}
        >
            <div className={classes.paper}>
              <Typography color="textSecondary" variant="title" id="modal-title">Settings</Typography>
              <Typography color="textSecondary" variant="subheading" id="settings-modal-description">
                Configure what user interface elements are shown.
              </Typography>
            </div>
        </Modal>
      </div>
    );
  }
}


/** Add modalStyles to the SettingsModal */
let SettingsModalWrapped = withStyles(modalStyles)(SettingsModal);
/** Setup redux connect() variables */
const mapStateToProps = state => ({open: state.modals.settings})
const mapActionsToProps = {toggleModal: toggleModal}
/** Connect element to redux */
SettingsModalWrapped = connect(mapStateToProps,mapActionsToProps)(SettingsModalWrapped);

export default SettingsModalWrapped