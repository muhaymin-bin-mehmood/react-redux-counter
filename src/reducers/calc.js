const initialState = 5;
const calcTheNumber = (state = initialState, action) => {
    switch(action.type){
        case "MULTIPLYNUMBER" : return state * 5;
        case "DIVIDENUMBER" : return state / 5;
        default: return state;
    }
}

export default calcTheNumber;