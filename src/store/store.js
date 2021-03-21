import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; // Para trabajar acciones asincronas

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);