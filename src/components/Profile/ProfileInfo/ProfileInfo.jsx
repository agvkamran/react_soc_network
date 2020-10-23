import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader />
  }
    return (
        <div>
          <div>
            {/* <img src='https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png' /> */}
          </div>
          <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large} />
            ava + description
          </div>
      </div>
    )
} 

export default ProfileInfo;