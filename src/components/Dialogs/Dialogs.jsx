import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {

    let state = props.store.getState().messagesPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/> );
    let messagesElements = state.messages.map(m => <Message message={m.message}/> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator()); 
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body)); 
    }

    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>
               {dialogsElements}
           </div>
           <div className={s.messages}>
               <div>{messagesElements}</div>
               <div>
                   <div><textarea placeholder='ENTER YOUR MESSAGE' value={newMessageBody} onChange={onNewMessageChange}></textarea></div>
                   <div><button onClick={onSendMessageClick}>SEND MESSAGE</button></div>
               </div>
           </div>
        </div>
    )
}


export default Dialogs;