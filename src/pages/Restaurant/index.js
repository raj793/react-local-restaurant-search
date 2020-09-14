import React from 'react'
import {withRouter} from 'react-router-dom'

import RestaurantDetail from '../../components/RestaurantDetail'
import Reviews from '../../components/Reviews'

import './index.css'

const Restaurant = ({location}) => {

  const resId = location.pathname.split('/')[2]

  return (
    <div className="restaurant__mainContainer">
      <div className="restaurant__mainContainer__detailsContainer">
        <RestaurantDetail resId={resId}/>
        <Reviews resId={resId}/>
      </div>
    </div>
  )
}

export default withRouter(Restaurant)