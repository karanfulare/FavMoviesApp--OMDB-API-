import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

//function logger(ocj,next,action) a cuury function
// const logger = function({dispatch, getState}){
//   return function(next){
//     return function (action){
//       console.log ('ACTION_TYPE= ',action.type);
//       next(action);
//     }
//   }
// }

const logger = ({dispatch, getState})=>(next)=>(action)=>{
  if(typeof action !== 'function'){
    console.log ('ACTION_TYPE= ',action.type);
  }
  
  next(action);
}

// const thunk = ({dispatch, getState})=>(next)=>(action)=>{
//   if(typeof action==='function'){
//     action(dispatch);
//     return;
//   }
//   next(action);
// }


const store = createStore(rootReducer, applyMiddleware(logger, thunk));
//console.log(store);
// console.log(store.getState());

// export const StoreContext = createContext();

// console.log('StoreContext', StoreContext);

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies: [{name:'Superman'}]
// });

// class Provider extends React.Component {
//   render () {
//     const {store}= this.props;
//  return <StoreContext.Provider value={store}>
//       {this.props.children}
// </StoreContext.Provider>;
//   }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  /* </React.StrictMode> */
);

// ReactDOM.render(<App store={store}/>,document.getElementById('root'));
