import React from 'react'
import {
  Button,
  // Grid,
  // Modal,
  // Typography,
} from '@material-ui/core/'
import toggleModal from './../storeDispatchers/toggleModal'
//import store from './../store'

const AddNewSet = (props) => {
  console.log("AddNewSet props:  ", typeof props, props)
  return <div>
    <Button onClick={()=>{toggleModal("addSet")}}>
      Add
    </Button>
  </div>
}

export default AddNewSet