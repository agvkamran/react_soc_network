const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE';

const dialogsReducer = (state, action) => {
    switch(action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_POST_MESSAGE:
           state.newMessageText = action.newM;
           return state;
        default: 
           return state;
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateNewPostMessageActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-POST-MESSAGE', newM: text
    }
}

export default dialogsReducer;