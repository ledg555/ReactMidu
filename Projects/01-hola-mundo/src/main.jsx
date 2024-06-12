import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import FollowCard from './FollowCard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FollowCard
    name="José"
    usrname="Juancho"
    isFollowing={true}
  />
)
