import {
    num_max_alterado,
    num_min_alterado
} from
'../actions/actionsTypes'

const initialState = {
    min: 55,
    max: 65
}

export default function(state = initialState, action){
    switch(action.type){
        case num_min_alterado:
            return {
                ...state,
                min: action.payload
            }
        case num_max_alterado:
            return{
                ...state,
                max: action.payload
            }
        default:
            return state
    }

}