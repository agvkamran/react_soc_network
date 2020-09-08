import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/> );
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/> );

    // let newMessageElement = React.createRef();
    // let addMessage = () => {
    //     let textMessage = newMessageElement.current.value;
    //     props.addMessage(textMessage);
    //     props.updateNewMessageText('');
    // ;} 

    // let onChangeMessage = () => {
    //     let textMessage = newMessageElement.current.value;
    //     props.updateNewMessageText();
    // };


    let newDialogElement = React.createRef();
    let addDialog = () => {
        let textDialog = newDialogElement.current.value;
        props.addDialog(textDialog);
        newDialogElement.current.value = '';
        }


        
    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.addMessage();
        props.updateNewPostMessage('');
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewPostMessage(text);

    }

    return (

        <div className={s.dialogs}>
           <div className={s.dialogsItems}>
               {dialogsElements}
               <textarea ref={newDialogElement}></textarea>
               <button onClick={addDialog}>button</button>
           </div>
           <div className={s.messages}>
               {messagesElements}
               <textarea ref={newMessageElement} value={props.state.newMessageText} onChange={onMessageChange}></textarea>
               <button onClick={addMessage}>button</button>
               {/* <textarea ref={newMessageElement} value={props.state.newMessageText} onChange={onChangeMessage} />
               <button onClick={addMessage}>add message</button> */}
           </div>
        </div>
    )
}


export default Dialogs;