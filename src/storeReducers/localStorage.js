
const loadFromStorage = (key) => {
  let returnData = false
  try {
    const localData = localStorage.getItem("ttdr-"+key)
    if(localData) {
      const localDataJSON = JSON.parse(localData)
      if(localDataJSON) {
        returnData = localDataJSON
      }
    }
  }
  catch(e) {
    try{
      localStorage.getItem("ttdrAppData")
    }
    catch(e){
      console.warn("LocalStorage is diabled")
    }
  }
  return returnData
}

const saveToStorage = (key,state) => {
  try{
    const saveState = JSON.stringify(state)
    localStorage.setItem('ttdr-'+key,saveState)
  }
  catch(e){
    console.warn("Cannot save state between page loads")
  }
}

export {
  loadFromStorage,
  saveToStorage
}