/** Used to on the modal element */
const modalStyles = (theme) => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 100,
    maxWidth: '75%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 3,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
});

export default modalStyles