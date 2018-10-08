import React from 'react'
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core/'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'

const SetCard = props => {
  const { setData, classes } = props
  return <Card>
    <CardContent>
      <Typography variant="headline">{setData.name}</Typography>
      <Typography variant="subheading">{setData.note}</Typography>
    </CardContent>
    <CardActions>
      <Button
        variant="contained"
        color="secondary"
      >Roll</Button>
    </CardActions>
    </Card>
}

export default SetCard