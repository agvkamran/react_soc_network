import React from 'react';
import {addPostActionCreator,updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import Myposts from './Myposts';

const MypostsContainer = (props) => {
    let state = props.store.getState();
    let addPost = () => {
      props.store.dispatch(addPostActionCreator());
    }
    
    let onPostChange = (text) => {
      let action = updateNewPostTextActionCreator(text);
      props.store.dispatch(action);
    };

    return (<Myposts updateNewPostText={onPostChange} 
                    addPost={addPost} 
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText} />)
} 
export default MypostsContainer;