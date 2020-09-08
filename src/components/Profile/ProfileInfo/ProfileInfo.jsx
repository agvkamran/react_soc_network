import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
          <div>
            {/* <img src='https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png' /> */}
          </div>
          <div className={s.descriptionBlock}>
            ava + description
          </div>
      </div>
    )
} 

export default ProfileInfo;