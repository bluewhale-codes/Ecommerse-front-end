import React from 'react'
import './profileCard.css'
const ProfileCard = () => {
  return (
  <div className="profile-card">
    <div className="image">
      <img src="https://res-console.cloudinary.com/dycjjaxsk/thumbnails/v1/image/upload/v1691908340/c2FtcGxlcy9sb29rLXVw/grid_landscape" alt="" className="profile-pic"/>
    </div>
    <div className="data">
      <h3>Vishal Shakya</h3>
      <span>Update order</span>
    </div>
  </div>

  )
}

export default ProfileCard