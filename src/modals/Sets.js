import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Modal,
  Typography
} from '@material-ui/core/';
import store from '../store'

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 100,
    maxWidth: '75%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class DiceSetsModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });

    store.dispatch({
      "type": "addSet",
      "payload": {name:"Test","primary":"1d20+4","secondary":"2d6+2","note":"slashing"}
    })

  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button color="secondary" onClick={this.handleOpen} variant="contained">
          <Typography variant="body2" id="modal-title">Sets</Typography>
        </Button>
        <Modal
          aria-labelledby="dice-sets-modal-title"
          aria-describedby="dice-sets-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography color="textSecondary" variant="title" id="modal-title">Dice Sets</Typography>
            <Typography color="textSecondary" variant="subheading" id="dice-sets-modal-description">
              Configure what user interface elements are shown.
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}

DiceSetsModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const DiceSetsModalWrapped = withStyles(styles)(DiceSetsModal);

export default DiceSetsModalWrapped;