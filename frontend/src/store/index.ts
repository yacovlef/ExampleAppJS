import { createStore, applyMiddleware } from 'redux';

import reduxThunk from 'redux-thunk';

import rootReducer from "./root-reducer";

export default createStore(rootReducer, applyMiddleware(reduxThunk));
