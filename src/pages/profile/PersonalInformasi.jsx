import React from 'react'
import Topbar from '../../components/navbar/Topbar'
import PersonalInformation from '../../components/profile/PersonalInformation'
import Navbar from '../../components/navbar/Navbar'

const PersonalInformasi = () => {
  return (
    <div>
        <Topbar/>
        <div>
            <PersonalInformation/>
        </div>
    </div>
  )
}

export default PersonalInformasi