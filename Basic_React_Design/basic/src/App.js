import React from 'react'
import ProfileCard from './components/ProfileCard'
import Profile from './components/Profile'
import profiles from "./data/profiles.json"


const App = () => {
  return (
    <>
      <div className="container">
        <Profile />
        <div className="card-container">
          {profiles.map((profile, index) => (
            <ProfileCard key={index} username={profile.username} role={profile.role} image={profile.image} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App;