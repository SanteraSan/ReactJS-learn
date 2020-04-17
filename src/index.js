import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost, subscriber} from "./state";
import {updaterTextAreaValue} from "./state";
import * as serviceWorker from './serviceWorker';


let pupsFromIndexJS = (state) =>{ReactDOM.render(
    <React.StrictMode>
        <App state={state} addPost={addPost} updater = {updaterTextAreaValue}/>
    </React.StrictMode>,
    document.getElementById('root')
);}

pupsFromIndexJS(state);
subscriber(pupsFromIndexJS);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
