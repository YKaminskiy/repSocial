import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {changeMessage, subscribe, updatePost} from "./Redux/state";
import {addPost} from "./Redux/state";
import {addMessage} from "./Redux/state";


let rerender =()=> {

    ReactDOM.render(
        <React.StrictMode>


            <App state={state}
                 addPost={addPost}
                 addMessage ={addMessage}
                 updatePost = {updatePost}
                 changeMessage = {changeMessage}

            />


        </React.StrictMode>,
        document.getElementById('root')
    );

}
rerender(state);
subscribe(rerender);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
