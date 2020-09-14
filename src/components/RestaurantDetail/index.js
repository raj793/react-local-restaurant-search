import React, {useState, useEffect} from 'react'

import ZomatoApi from '../../api/ZomatoApi'
import './index.css'

const RestaurantDetail = ({resId}) => {

  const [details, setdetails] = useState({})
  const zomatoApi = new ZomatoApi()

  useEffect(() => {
    fetchRestaurantData(resId)
  }, [])

  const fetchRestaurantData = async (id) => {
    const res = await zomatoApi.getRestaurantDetails(id)
    setdetails(res.data)
  }

  return (
    <div className="restaurantDetail__mainContainer">
      <div className="restaurantDetail__header">
        <div className="restaurantDetail__image">
          <img src={details.thumb} className="restaurantDetail__image_tag" />
        </div>
        <div className="restaurantDetail__info">
          <div className="restaurantDetail__info__name">{details.name}</div>
          <div className="restaurantDetail__info__cuisines">{details.cuisines}</div>
          <div className="restaurantDetail__info__address">{details.location && details.location.address}</div>
        </div>
      </div>
      <div className="restaurantDetail__content">
        <div className="restaurantDetail__highlights">
          <ul>
            {details.highlights && details.highlights.map((highlight) => {
              return (
                <li className="restaurantDetail__highlights__highlight" key={highlight}>{highlight}</li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RestaurantDetail