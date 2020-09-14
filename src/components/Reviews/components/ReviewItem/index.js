import React from 'react'
import UserAvatar from '../UserAvatar'
import './index.css'

const ReviewItem = ({review}) => {

  const reviewText = (text) => {
    return text ? text : "No Review"
  }

  return (
    <div className="review__listItem">
      <div className="review__listItem__avatar">
        <UserAvatar user={review.review.user} rating={review.review.rating} />
      </div>
      <div className="review__listItem__info">
        <p>{reviewText(review.review.review_text)}</p>
      </div>
    </div>
  )
}

export default ReviewItem;