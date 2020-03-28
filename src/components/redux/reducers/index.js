import {combineReducers} from 'redux';

import employeeReducer from './employeeReducer';
import loginReducer from './loginReducer'

const rootReducer =combineReducers({
    employee: employeeReducer,
    loginData:loginReducer

});

export default rootReducer