import React from 'react';
import { connect } from 'react-redux';
import {addPostActionCreator,updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import Myposts from './Myposts';


const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}


const MypostsContainer = connect (mapStateToProps, mapDispatchToProps)(Myposts);

export default MypostsContainer;