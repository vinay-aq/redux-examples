import { TOGGLE_TODO_STATUS,ADD_TODO } from "../actions/constants";

const initialState = {
   todos:[] 
}
// todos = [{status:Active/Completed, todo:""}]

     
export const todosReducer = (state = initialState,action) => {

    console.log('state',state,action.payload);
    switch (action.type) {
        case TOGGLE_TODO_STATUS:
            let todos =  state.todos.map((item,index) => {
                if (action.payload === index) {
                    let toggledStatus = item.status === "Active" ? "Completed" : "Active";
                    return { ...item, status: toggledStatus };
                  }
                  return item;
                
            });
            return {...state, todos};

        case ADD_TODO:
             return {...state, todos:[...state.todos,action.payload]}
        
        default:
           return state;
    }
}