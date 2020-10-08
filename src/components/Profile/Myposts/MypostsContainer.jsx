import React from 'react';
import {addPostActionCreator,updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import Myposts from './Myposts';

const MypostsContainer = () => {
    return ( 
            <StoreContext.Consumer> 
              {
              (store) => {
                let state = store.getState();
                let addPost = () => {
                  store.dispatch(addPostActionCreator());
                }
                
                let onPostChange = (text) => {
                  let action = updateNewPostTextActionCreator(text);
                  store.dispatch(action);
                };
                 return <Myposts updateNewPostText={onPostChange} 
                          addPost={addPost} 
                          posts={state.profilePage.posts}
                          newPostText={state.profilePage.newPostText} /> }
              }
            </StoreContext.Consumer>)
} 

export default MypostsContainer;