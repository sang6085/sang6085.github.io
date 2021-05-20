import * as message from './../constants/Message'; 
import * as types from './../constants/ActionTypes';
var initialState=message.MSG_WELLCOM;
var myReducer=(state=initialState,action)=>{
        switch (action.type) {
            case types.CHANGE_MESSAGE:
                state=action.message;
                return [...state];
             
        
            default:
                return [...state];
        }
    }
export default myReducer;