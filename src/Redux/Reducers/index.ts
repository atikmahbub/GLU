import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { uiReducer } from './uiReducer';
import {schoolReducer} from './schoolReducer';
import {studentReducer} from './studentReducer';
import {teacherReducer} from './teacherReducer';
import {parentReducer} from './parentReducer';



export const rootReducer = combineReducers({
    authReducer,
    uiReducer,
    schoolReducer,
    studentReducer,
    teacherReducer,
    parentReducer
});
