import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const UPDATER_NEW_POST = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_STATUS = "SET_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";


let initialState = {
    posts: [
        {
            id: 1,
            greet: "hello",
            likeCounts: 15,

        },
        {
            id: 2,
            greet: "hi",
            likeCounts: 20,
        }
    ],
    textAreaValue: "some text",
    profile: null,
    status: "Please Sign in https://social-network.samuraijs.com"

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                greet: action.profileAddPost,
                likeCount: 0,
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts, newPost];
            // stateCopy.posts.push(newPost);
            stateCopy.textAreaValue = "";
            return stateCopy;
        }
        case SET_USERS_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        case UPDATER_NEW_POST: {
                let stateCopy = {...state};
                stateCopy.textAreaValue = action.newText;
                return stateCopy;
            }
        default:
            return state;
        }
    }
    ;

    export const addPost = (profileAddPost) => ({type: ADD_POST, profileAddPost});
    export const updateNewPost = (text) => ({type: UPDATER_NEW_POST, newText: text});
    export const setUserProfile = (profile) => ({type: SET_USERS_PROFILE, profile});
    export const setStatus = (status) => ({type: SET_STATUS, status});
    export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});


    export const getProfileData = (userId) => {
        return (dispatch) => {
            usersAPI.getProfile(userId).then(response => {
                dispatch(setUserProfile(response.data));
            })
        }
    };
    export const getStatus = (userId) => {
        return (dispatch) => {
            profileAPI.getStatus(userId).then(response => {
                dispatch(setStatus(response.data));
            });
        }

    };
    export const updateStatus = (status) => {
        return (dispatch) => {
            profileAPI.updateStatus(status).then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
        }
    };
    export const savePhoto = (file) => {
        return async (dispatch) => {
            let response = await profileAPI.savePhoto(file);

            if (response.data.resultCode === 0) {
                dispatch(savePhotoSuccess(response.data.data.photos))
            }

        }
    };
    export const saveProfile = (profile) => {
        return async (dispatch, getState) => {
            const userId = getState().auth.userId;
            const response = await profileAPI.saveProfile(profile);
            debugger;
            if (response.data.resultCode === 0) {
                dispatch(getProfileData(userId))}
            else {dispatch(stopSubmit("Edit-profile-info", {_error: response.data.messages[0]}));
                return Promise.reject(response.data.messages[0]);
            }
        }
    };


    export default profileReducer;
