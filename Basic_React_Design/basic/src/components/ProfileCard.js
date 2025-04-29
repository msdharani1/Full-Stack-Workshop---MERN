import React, { useState } from 'react'
// import profiles from "../data/profiles.json"

const ProfileCard = (profile) => {

  const [likeCount, setLikeCount] = useState(0);
  const [follow, setFollow] = useState("Follow");
  const [icon, setIcon] = useState("fa-plus");

  const handleLikeCount = () => {
    setLikeCount(likeCount + 1);
  }

  const handleFollow = () => {
    if (follow === "Follow") {
      setFollow("Following");
      setIcon("fa-check");
    }
    if (follow === "Following") {
      setFollow("Follow");
      setIcon("fa-plus");
    }
  }

  return (
    <div className="card">
      <div className="profile">
        <img src={profile.image} alt={profile.username} />
      </div>
      <div className="profile-info">
        <h6>{profile.username}</h6>
        <p>{profile.role}</p>
      </div>
      <div className="action-btn">
        <button className='like-btn' onClick={handleLikeCount}><i className="fa-solid fa-heart"></i>{likeCount}</button>
        <button className="follow-btn" onClick={handleFollow}><i className={`fa-solid ${icon}`}></i>{follow}</button>
      </div>
    </div>
  )
}

export default ProfileCard;