


import { FETCH_PRODUCT  } from "../type/type"; 

let initialState = {
    error: '' ,
    products: []
}


function studentReducer(state = initialState, action)
{

    switch (action.type) {

        case FETCH_PRODUCT:
            console.log("Data in Reducer from Fetch Action: " , action.payload);
            return  {
                ...state,
                name: 'Fetch Ahsan',
                products: action.payload
            }
        

            
        default:
            return state;
    }
}

export default studentReducer;