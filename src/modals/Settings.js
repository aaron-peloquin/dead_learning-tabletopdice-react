import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Modal,
  Typography,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core/';
import SettingsIcon from '@material-ui/icons/Settings';
import { connect } from 'react-redux'
import { toggleModal } from './../storeDispatchers/toggleModal'
import { bindActionCreators } from 'redux'
import { updateSettings } from './../storeDispatchers/updateSettings'
import modalStyles from './helper-modalStyles'

class SettingsModal extends React.Component {
  /**
   * Assign properties to this element, and bind toggleModal() to this class.
   * @param {obj} props an object of all properties to assign into this element
   */
  constructor(props) {
    super(props)
    this.toggleModal = this.toggleModal.bind(this)
    console.log("this.updateSettings", this.updateSettings)
    this.updateSettings = ()=>{}
  }

  updateSettings = (name, ev) => {
    console.log("Called")
//    this.props.updateSettings(name)
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
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.props.settings.showStandardArray}
                    onChange={this.toggleModal("showStandardArray")}
                    value="showStandardArray"
                    color="primary"
                  />
                }
                color="textSecondary"
                label="Show Standard Array"
              />
            </div>
        </Modal>
      </div>
    );
  }
}


/** Setup redux connect() variables */
const mapStateToProps = (state, props) => {
  return {
    open: state.modals.settings,
    settings: state.settings,
  }
}

const mapDispatchToProps = (dispatch, props) => {
console.log("dispatch", dispatch)
  return bindActionCreators({
    toggleModal,
    updateSettings,
  }, dispatch)
}

/** Add modalStyles to the SettingsModal */
SettingsModal = withStyles(modalStyles)(SettingsModal);

/** Connect element to redux */
SettingsModal = connect(mapStateToProps, mapDispatchToProps)(SettingsModal);

export default SettingsModal