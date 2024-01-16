import React from 'react'
import Topbar from '../../components/navbar/Topbar'
import Profile1 from '../../components/profile/Profile'
import Navbar from '../../components/navbar/Navbar'

const Profile = () => {
  return (
    <div>
        <Topbar/>
        <div><Profile1/></div>
        <Navbar/>
    </div>
  )
}

export default Profile