const filtersReducerDefaultState = {
    text: '',
    sortBy: 'category'
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_CATEGORY_FILTER':
            return {
                ...state,
                category: action.category
            };
        default:
            return state;
    }
}