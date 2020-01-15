import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers'
// import optionsReducer from './authReducer'
import thunk from 'redux-thunk'

// const store = createStore(
//     rootReducer,
//     compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     // applyMiddleware goes after DEVTOOLS or bad things happen
//     applyMiddleware(thunk)
//     )   
// )

// let composeEnhancers = compose;

// let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


// const store = createStore(
//     rootReducer,
//     applyMiddleware(thunk),
//     composeEnhancers(applyMiddleware(thunk))
// );

// export default function configureStore() {  
//     return createStore(
//       rootReducer,
//       applyMiddleware(thunk)
//     );
// }

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
const store = createStore(rootReducer, enhancer);

export default store