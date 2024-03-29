const initialState = {
    recipes: []
}

const recipeReducer = (recipeState = initialState, action) => {
    switch(action.type) {
        case 'SET_RECIPES':
            return {
                recipes: action.payload
            }
        default: 
            return recipeState;
    }
}

export default recipeReducer;