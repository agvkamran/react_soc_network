import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi how are you?', likesCount: 221},
                {id: 2, message: 'Is my first post', likesCount: 1232},
                {id: 2, message: 'BlaBla', likesCount: 19},
                {id: 2, message: 'Meow', likesCount: 155}
            ],
            newPostText: 'it-kamasutra.com'
        },
    
        messagesPage: {
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
            newMessageBody : ''
        }
    },

    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    _callSubscriber () {
        console.log('State changed')
    },

    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);  
    }
}

window.store = store;
export default store;
