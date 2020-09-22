const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Kamran'},
        {id: 2, name: 'Kamal'},
        {id: 3, name: 'Kanan'}, 
        {id: 4, name: 'Ilaha'}
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'ByeBye'},
        {id: 3, message: 'IT-kamasutra'},
        {id: 4, message: 'React'},
        {id: 5, message: 'Redux'}
    ],
    newMessageText : 'samurai'
}

const dialogsReducer = (state = initialState, action) => {
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