import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

const withSpinner = (Component) => ({loading}) => {
  return (
      loading ?
      <CircularProgress />:
      <Component/>
  )
}

export default withSpinner