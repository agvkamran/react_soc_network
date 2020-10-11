import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'

const Dialogs = (props) => {
    
    let state = props.messagesPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/> );
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        
        let body = e.target.value;
        props.updateNewMessageBody(body);
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