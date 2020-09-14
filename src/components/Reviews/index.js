import React, {useState, useEffect} from 'react'
import ZomatoApi from '../../api/ZomatoApi'
import ReviewItem from './components/ReviewItem'
import withSpinner from '../WithSpinner'
import './index.css'

const Reviews = ({resId}) => {

  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const zomatoApi = new ZomatoApi()

  useEffect(() => {
    getReviews(resId, 10)
  }, [])

  const getReviews = async (resId, count) => {
    setLoading(true)
    const res = await zomatoApi.getRestaurantReviews(resId, count)
    setReviews(res.data.user_reviews)
    setLoading(false)
  }

  const ReviewItems = () => (reviews && reviews.map((review) => {
    return(
      <ReviewItem review={review} key={review.review.id}/>
    )
  }))

  const WithSpinnerComponent = withSpinner(ReviewItems)

  return (
    <div className="reviews__listMain">
      <WithSpinnerComponent loading={loading} />
    </div>
  )
}

export default Reviews;