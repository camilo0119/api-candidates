import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; // Para trabajar acciones asincronas
import { candidateReducer } from '../reducers/candidateReducer';
import { deviceReducer } from '../reducers/deviceReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    candidate: candidateReducer,
    device: deviceReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);