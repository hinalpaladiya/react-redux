const initialState = 0;
const inc_dec = (state = initialState, action) => {
    switch (action.type) {
        case 'Increment':
            return state + 1;
            break;
        case 'Decrement':
            return state - 1;
        break;
        default:
            return state;
            break;
    }
}

export default inc_dec