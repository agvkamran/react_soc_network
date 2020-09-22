import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {addMessage, updateNewPostMessage} from './redux/state'; 
// import {addPost, addMessage, addDialog, updateNewPostText, updateNewPostMessage} from './redux/state';


let rerenderEntireTree = (state) => {
ReactDOM.render(
  <React.StrictMode>
    <App state={state} dispatch={store.dispatch.bind(store)}/>

     
     {/* addMessage={store.addMessage.bind(store)} updateNewPostMessage={store.updateNewPostMessage.bind(store)} 2_!!! */}
    {/* // addMessage={addMessage} updateNewPostMessage={updateNewPostMessage}  1_!!! */}
    {/* updateNewPostMessage={store.updateNewPostMessage} addMessage={store.addMessage} addDialog={store.addDialog} */}
  </React.StrictMode>,
  document.getElementById('root')
);
}


let currentState = store.getState();
rerenderEntireTree(currentState);
// store.subscribe(rerenderEntireTree);
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
