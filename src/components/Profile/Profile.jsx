import React from 'react';  
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MypostsContainer from './Myposts/MypostsContainer';

const Profile = (props) => {
    return (
        <div>
          <ProfileInfo profile={props.profile} />
          <MypostsContainer />
      </div>
    )
} 

export default Profile;