let rerenderEntireTree = () => {
    console.log('State changed')
}

let state = {
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
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 123
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

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


export let addMessage = () => {
    let newMessage = {
        id: 6,
        message: state.messagesPage.newMessageText
    }
    state.messagesPage.messages.push(newMessage);
    rerenderEntireTree(state);
}

export let updateNewPostMessage = (newM) => {
    state.messagesPage.newMessageText =newM;
    rerenderEntireTree(state);
}


export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}









export let addDialog = (postDialog) => {
    let newDialog = {
        id: 5,
        name: postDialog
    }
    state.messagesPage.dialogs.push(newDialog);
    rerenderEntireTree(state);
}






export default state;



