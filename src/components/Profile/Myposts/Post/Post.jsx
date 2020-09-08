import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
              <div className={s.item}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRc96kcLicYy25CFi7P_ocMargwSC_vjRxIMg&usqp=CAU" alt=""/>
                {props.message} 
                <div>
                  <span>like {props.likesCount}</span>
                </div>
              </div>    
    )
} 
export default Post;