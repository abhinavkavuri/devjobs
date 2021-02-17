import { combineReducers } from 'redux';
import { DARK_ON, DARK_OFF, FETCH_JOBS } from '../actions/types';

const INITIAL_STATE = {
    type: 'light'
};

const themeReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case DARK_ON:
            return { ...state, type: 'dark' };
        case DARK_OFF: 
            return { ...state, type: 'light' };
        default:
            return state;
    }
}

const jobsReducer = (state = {}, action) => {
    switch(action.type){
        case FETCH_JOBS:
            return { ...state, jobs: action.payload };
        default:
            return state;
    }
}

export default combineReducers({
    theme: themeReducer,
    jobs: jobsReducer
});