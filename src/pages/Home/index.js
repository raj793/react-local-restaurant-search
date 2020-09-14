import React, {useEffect, useState} from 'react'
import _ from 'lodash'

import Topbar from '../../components/Topbar'
import Results from '../../components/Results'

import ZomatoApi from '../../api/ZomatoApi'
import './index.css'

const Home = () => {
  
  const [location, setLocation] = useState({})
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(true)
  const zomatoApi = new ZomatoApi()

  useEffect(() => {
    handlePermission()
  }, [])

  useEffect(() => {
    if(location.lat) {
      onLocationSuccess(location)
    }
  }, [location])

  const getSortedData = () => {
    const sorted = restaurants && restaurants.sort((a,b) => {
      return a.restaurant.user_rating.aggregate_rating > b.restaurant.user_rating.aggregate_rating ? -1 : 1
    })
    return sorted
  }

  function handlePermission() {
    navigator.geolocation.getCurrentPosition(storeLocation)
  }

  function storeLocation(position) {
    const latLng = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setLocation(latLng)
  }

  async function onLocationSuccess(state) {
    setLoading(true)
    const res = await zomatoApi.getNearbyRestaurants(state.lat, state.lng);
    setRestaurants(res.data["nearby_restaurants"])
    setLoading(false)
  }

  const getSearchResults = async (keyword, sortByRating) => {
    setLoading(true)
    const res = await zomatoApi.searchRestaurantsOrCuisines(keyword, location.lat, location.lng, sortByRating)
    setRestaurants(res.data["restaurants"])
    setLoading(false)
  }

  return (
    <div className="app">
      <Topbar searchCallback={_.debounce(getSearchResults, 300)}/>
      <div className="app__content">
        <Results restaurants={restaurants} loading={loading}/>
      </div>
    </div>
  )
}

export default Home