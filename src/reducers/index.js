const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'BRIGADES_LOADED':
            return {
                arr: action.payload,
                brigades: action.payload,
                idx: 0,
                loading: false,
                error: false
            };
        case 'NEXT_BRIGADES':
            let nextArr = [];
            nextArr = JSON.parse(JSON.stringify(state.arr)).splice( state.idx + 20 , 20);
            if ( nextArr.length < 1) {
                return {
                    ...state
                }; 
            }
            return {
                ...state,
                brigades: nextArr,
                idx: state.idx + 20
            };
        case 'PREV_BRIGADES':
            let prevArr = [];
            prevArr = JSON.parse(JSON.stringify(state.arr)).splice( state.idx -20 , 20);
            if ( state.idx < 20) {
                return {
                    ...state
                }; 
            }
            return {
                ...state,
                brigades: prevArr,
                idx: state.idx -20
            };
        case 'BRIGADES_ERROR':
            return {
                ...state,
                brigades: state.brigades,
                error: true
            };
        default: 
            return state;
    }
};

export default reducer;