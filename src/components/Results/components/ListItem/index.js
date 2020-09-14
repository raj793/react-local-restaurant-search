import React from 'react'
import Rating from '@material-ui/lab/Rating';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './index.css'

const ListItem = ({restaurant, onClick}) => {

  const deriveRatingText = (rating) => {
    if(rating <= 1000)
      return `(${rating} Reviews)`
    else
      return `(${(rating/1000).toFixed(1)}K Reviews)`
  }

  const withOnClickData = () => {
    onClick(restaurant.restaurant.id)
  }

  return (
    <div className="restaurant__listItem" onClick={withOnClickData}>
      <div className="restaurant__listItem__img">
        <img src={restaurant.restaurant.thumb} className="restaurant__listItem__imgTag"/>
      </div>
      <div className="restaurant__listItem__info">
        <div className="restaurant__listItem__info__name">
          {restaurant.restaurant.name}
        </div>
        <div className="restaurant__listItem__info__rating">
          <Rating
            name="user-rating"
            value={Number(restaurant.restaurant.user_rating.aggregate_rating)}
            readOnly
          />
          <div>{restaurant.restaurant.user_rating.aggregate_rating}</div>
          <div>{deriveRatingText(restaurant.restaurant.user_rating.votes)}</div>
        </div>
        <div>{restaurant.restaurant.cuisines}</div>
        <div>{`Cost for two ${restaurant.restaurant.average_cost_for_two}`}</div>
      </div>
      <div className="restaurant__listItem__iconContainer">
        <ChevronRightIcon />
      </div>
    </div>
  )
}

export default ListItem;