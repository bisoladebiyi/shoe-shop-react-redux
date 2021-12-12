import { BUY_SHOES } from "./shoeType";


const initialState = {
    numberOfShoes: 20
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_SHOES: return {
            ...state,
            numberOfShoes: state.numberOfShoes - 1
        }
        default: return state
    }
}

export default reducer