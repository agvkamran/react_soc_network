import React from 'react';
import s from './Myposts.module.css'
import Post from './Post/Post'
import {addPostActionCreator,updateNewPostTextActionCreator} from '../../../redux/profile-reducer';

const Myposts = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/> );

    let newPostElement = React.createRef();
    
    let addPost = () => {
      // props.addPost;
      props.dispatch(addPostActionCreator());
    }
    
    let onPostChange = () => {
      let text = newPostElement.current.value;
      // props.updateNewPostText(text);
      // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
      let action = updateNewPostTextActionCreator(text);
      props.dispatch(action);
    };

    return (
          <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
              <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
              </div>
              <div>
                <button onClick={addPost}>Add post</button>
              </div>
            </div>

            <div className={s.posts}>
              {postElements}
            </div>
          </div>
    )
} 
export default Myposts;