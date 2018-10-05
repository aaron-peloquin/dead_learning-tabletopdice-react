import React from 'react';
import PropTypes from 'prop-types';
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

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const modalStyles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 100,
    maxWidth: '75%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 3,
  },
});

class SettingsModal extends React.Component {
  constructor(props) {
    super(props)
    this.toggleModal = this.toggleModal.bind(this)
  }
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
            <div style={getModalStyle()} className={classes.paper}>
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

SettingsModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SettingsModalWrapped = withStyles(modalStyles)(SettingsModal);

const mapStateToProps = state => ({
  open: state.modals.settings
})

const mapActionsToProps = {
  toggleModal: toggleModal
}

export default connect(mapStateToProps,mapActionsToProps)(SettingsModalWrapped);