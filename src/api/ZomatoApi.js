import axios from 'axios'
import {API_KEY, BASE_URL} from '../config'

export default class ZomatoApi {
  constructor() {
    this._instance = axios.create({
      baseURL: BASE_URL
    })
    this._instance.defaults.headers.common['user-key'] = API_KEY
  }

  getNearbyRestaurants = (lat, lng) => {
    const geocodeUrl = `/geocode?lat=${lat}&lon=${lng}`
    return this._instance.get(geocodeUrl)
  }

  searchRestaurantsOrCuisines = (keyword, lat, lng, sortByRating) => {
    let searchUrl = `/search?q=${keyword}&lat=${lat}&lon=${lng}`
    if(sortByRating) {
      searchUrl += '&sort=rating'
    }
    return this._instance.get(searchUrl)
  }

  getRestaurantDetails = (restaurantId) => {
    const restaurantUrl = `/restaurant?res_id=${restaurantId}&sort=rating`
    return this._instance.get(restaurantUrl)
  }

  getRestaurantReviews = (restaurantId, count) => {
    const reviewUrl = `/reviews?res_id=${restaurantId}&count=${count}`
    return this._instance.get(reviewUrl)
  }
}