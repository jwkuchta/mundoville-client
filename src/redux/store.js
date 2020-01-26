// import {createStore, applyMiddleware, compose} from 'redux';
// import rootReducer from './reducers'
// // import optionsReducer from './authReducer'
// import thunk from 'redux-thunk'


// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(thunk),
//   // other store enhancers if any
// );
// const store = createStore(rootReducer, enhancer);

// export default store

// *************************************************************************

// import {createStore, applyMiddleware, compose} from 'redux';
// import rootReducer from './reducers'
// // import optionsReducer from './authReducer'
// import thunk from 'redux-thunk'
// export default store
// import { loadState, saveState } from './localStorage'
// import throttle from 'locash/throttle'

// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(thunk),
//   // other store enhancers if any
// );

// const persistedState = loadState()
// const store = createStore(rootReducer, enhancer);


// store.subscribe(throttle(() => {
//     saveState(store.getState())
// }), 1000)

// // store.subscribe(() => {
// //     saveState({
// //         currentUser: store.getState().currentUser
// //     })
// // })

// export default store

// *****************************************************

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root', 
  storage: storage,
  whitelist: ['users', 'options', 'currentUser', 'exchanges', 'reviews', 
  'selectedUser', 'search', 'condition', 'filteredUsers', 'countrySelection']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

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


export const store = createStore(persistedReducer, enhancer)
export const persistor = persistStore(store)





