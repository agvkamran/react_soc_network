import React from 'react';  
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MypostsContainer from './Myposts/MypostsContainer';

const Profile = () => {

    return (
        <div>
          <ProfileInfo />
          <MypostsContainer />
      </div>
    )
} 

export default Profile;