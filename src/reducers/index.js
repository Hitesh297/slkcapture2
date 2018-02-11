import {combineReducers} from 'redux';
import AuthorizationReducer from './reducer_authorization';


const rootReducer = combineReducers(
  {

    isAuthorized : AuthorizationReducer
  }
);

export default rootReducer;
