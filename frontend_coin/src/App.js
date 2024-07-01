// import logo from './logo.svg';
import React,{Component} from 'react';

import './App.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import store from './store';
import Router from './Router';
class App extends Component {
  render() {

    // const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
// function App() {
//   return (
//     <div className='container'>
//           <TabManager />
//     </div>

//   );
// }

// export default App;
