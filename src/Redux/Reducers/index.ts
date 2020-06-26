import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { uiReducer } from './uiReducer';

export const RootReducer = combineReducers({
    authReducer,
    uiReducer,
});
