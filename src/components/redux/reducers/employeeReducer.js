const employeeReducer = (state=[],action)=>{

    switch(action.type){
        case 'GET_EMPLOYEES':
            return action.payload;
            case 'GET_LOGIN':
            return action.payload;
        default:
            return state
    }
}

export default employeeReducer;