import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk' 
import DataReducer from './Reducer/data'

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
   data: DataReducer
})

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store;

