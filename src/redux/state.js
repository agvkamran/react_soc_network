// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'


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
            newMessageText : 'samurai'
        }
    },

    _callSubscriber() {
        console.log('State changed')
    },
    
    // addMessage() {
    //     let newMessage = {
    //         id: 6,
    //         message: this._state.messagesPage.newMessageText
    //     }
    //     this._state.messagesPage.messages.push(newMessage);
    //     this._callSubscriber(this._state);
    //     this._state.messagesPage.newMessageText = '';
    // },
    
    // updateNewPostMessage (newM) {
    //     this._state.messagesPage.newMessageText = newM;
    //     this._callSubscriber(this._state);
    // },

    addDialog (postDialog) {
        let newDialog = {
            id: 5,
            name: postDialog
        }
        this._state.messagesPage.dialogs.push(newDialog);
        this._callSubscriber(this._state);
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        // console.log(this);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
        // if (action.type === ADD_POST) {
        //     let newPost = {
        //         id: 5,
        //         message: this._state.profilePage.newPostText,
        //         likesCount: 123
        //     }
        //     this._state.profilePage.posts.push(newPost);
        //     this._state.profilePage.newPostText = '';
        //     this._callSubscriber(this._state);
        // }
        // else if (action.type === UPDATE_NEW_POST_TEXT) {
        //     this._state.profilePage.newPostText = action.newText;
        //     this._callSubscriber(this._state);
        // }

        

        // if(action.type === ADD_MESSAGE){
        //     let newMessage = {
        //         id: 6,
        //         message: this._state.messagesPage.newMessageText
        //     }
        //     this._state.messagesPage.messages.push(newMessage);
        //     this._callSubscriber(this._state);
        //     this._state.messagesPage.newMessageText = '';
        // }
        // else if(action.type === UPDATE_NEW_POST_MESSAGE){
        //     this._state.messagesPage.newMessageText = action.newM;
        //     this._callSubscriber(this._state);
        // }
    }
}

//------------------------------ PROFILEPAGE. POST    
// export const addPostActionCreator = () => {
//     return {
//       type: ADD_POST
//     }
//   }

// export const updateNewPostTextActionCreator = (text) => {
//     return {
//       type: UPDATE_NEW_POST_TEXT, newText: text
//     }
//   }


//------------------------------- MESSAGESPAGE. MESSAGE
// export const addMessageActionCreator = () => {
//     return {
//         type: ADD_MESSAGE
//     }
// }

// export const updateNewPostMessageActionCreator = (text) => {
//     return {
//         type: 'UPDATE-NEW-POST-MESSAGE', newM: text
//     }
// }





// Если не засовывать функции в store, то все работает! 1_!!!

// export const addMessage = () => {
//     console.log(store);
//     let newMessage = {
//         id: 6,
//         message: store._state.messagesPage.newMessageText,
//     }
//     store._state.messagesPage.messages.push(newMessage);
//     store._callSubscriber(store._state);
// }

// export const updateNewPostMessage = (newM) => {
//     store._state.messagesPage.newMessageText = newM;
//     store._callSubscriber(store._state);
// }








// СДЕЛАЛ ИЗМЕНЕНИЯ НА ПРИВАТНЫЕ И RERENDERENTIREDTREE ПОМЕНЯЛ НА CALLSUBSCRIBER!

// export let addMessage = () => {
//     let newMessage = {
//         id: 6,
//         message: this._state.messagesPage.newMessageText,
//     }
//     this._state.messagesPage.messages.push(newMessage);
//     this._callSubscriber(this._state);
// }

// export let updateNewPostMessage = (newM) => {
//     this._state.messagesPage.newMessageText = newM;
//     this._callSubscriber(this._state);
// }

// export let addMessage = (postMessage) => {
//     let newMessage = {
//         id: 5,
//         message: postMessage
//     }
//     state.messagesPage.messages.push(newMessage);
//     rerenderEntireTree(state);
// }

// export let updateNewMessageText = (newText) => {
//     state.messagesPage.newMessageText = newText;
//     rerenderEntireTree(state);
// }


// export const subscribe = (observer) => {
//     rerenderEntireTree = observer;
// }

// export let addDialog = (postDialog) => {
//     let newDialog = {
//         id: 5,
//         name: postDialog
//     }
//     state.messagesPage.dialogs.push(newDialog);
//     rerenderEntireTree(state);
// }





window.store = store;
export default store;



    // методы которые закомментированы перешли в dispatch их можно удалить
    // addPost () {
    //     debugger; 
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 123
    //     }
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText){
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },