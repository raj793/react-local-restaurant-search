import React from 'react'
import ListItem from './components/ListItem'
import {useHistory} from 'react-router-dom'
import './index.css'
import withSpinner from '../WithSpinner'

const Results = ({restaurants, loading}) => {

  const history = useHistory()

  const redirectToRestaurantPage = (restaurantId) => {
    history.push(`/restaurant/${restaurantId}`)
  }

  const ListItems = () => (
    restaurants && restaurants.map((restaurant) => {
      return (
        <ListItem restaurant={restaurant} key={restaurant.restaurant.id} onClick={redirectToRestaurantPage}/>
      )
    })
  )

  const ListWithSpinner = withSpinner(ListItems)

  return (
    <div className="restaurant__listMain">
        <ListWithSpinner loading={loading} />
    </div>
  )
}

export default Results;