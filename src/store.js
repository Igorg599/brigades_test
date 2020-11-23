import reducer from './reducers';
import {compose, createStore} from 'redux';
import persistState from 'redux-localstorage';

const initialState = {
    arr: [],
    brigades: [],
    idx: null,
    loading: true,
    error: false
};

const enhancer = compose(persistState());
   
const store = createStore(reducer, initialState, enhancer);

export default store;
