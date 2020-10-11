const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

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
        {id: 4, message: 'spret operator'},
        {id: 5, message: 'kopirovanie massivov'}
    ],
    newMessageBody : ''
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state,
            newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {...state,
            newMessageBody: '',
            messages: [...state.messages, {id: 6, message: body }],
        };

        default: 
            return state;   
    }
}


// const dialogsReducer = (state = initialState, action) => {
//     switch(action.type){
//         case UPDATE_NEW_MESSAGE_BODY:
//             state.newMessageBody = action.body;
//             return state;
//         case SEND_MESSAGE: 
//             let body = state.newMessageBody;
//             state.newMessageBody = '';
//             state.messages.push({id: 6, message: body })
//             return state;
//         default: 
//             return state;   
//     }
// }


// const dialogsReducer = (state = initialState, action) => {
//     switch(action.type){
//         case UPDATE_NEW_MESSAGE_BODY: {
//             let stateCopy = {...state};
//             stateCopy.newMessageBody = action.body;
//             return stateCopy;
//         }
//         case SEND_MESSAGE: {
//             let stateCopy = {...state};
//             // stateCopy.newMessageBody = {...state.newMessageBody}; 
//             let body = stateCopy.newMessageBody;
//             stateCopy.newMessageBody = '';
//             stateCopy.messages = [...state.messages];
//             stateCopy.messages.push({id: 6, message: body })
//             return stateCopy;
//         }
//         default: 
//             return state;   
//     }
// }



export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;