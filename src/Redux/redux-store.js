import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialog_reducer";
import profileReducer from "./profile_reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer
});

let store = createStore(reducers);

window.store = store;

export default store;