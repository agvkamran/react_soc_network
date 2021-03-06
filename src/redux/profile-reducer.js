const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi how are you?', likesCount: 221},
        {id: 2, message: 'Is my first post', likesCount: 1232},
        {id: 2, message: 'BlaBla', likesCount: 19},
        {id: 2, message: 'Meow', likesCount: 155}
    ],
    newPostText: 'it-kamasutra.com'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 123
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:  
            state.newPostText = action.newText;
            return state;
        default:
                return state;
    }
}

export const addPostActionCreator = () => {
    return {
      type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
      type: UPDATE_NEW_POST_TEXT, newText: text
    }
}

export default profileReducer;