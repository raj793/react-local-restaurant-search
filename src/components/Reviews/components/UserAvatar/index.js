import React from 'react'
import Rating from '@material-ui/lab/Rating';
import './index.css'

const UserAvatar = ({user, rating}) => {
  return (
    <div className="userAvatar__main">
      <img src={user.profile_image} className="avatar" />
      <div className="userAvatar__name">{user.name}</div>
      <Rating name="user-rating"
        value={Number(rating)}
        readOnly 
      />
      {/* <div className="userAvatar__handle">{`@${user.zomato_handle}`}</div> */}
    </div>
  )
}

export default UserAvatar