import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import configureStore from '../store/main_store'
import HeaderContainer from '../containers/HeaderContainer'
import PostIndexContainer from '../containers/PostIndexContainer'

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
const Main = (props) => (
  <Provider store={configureStore(props)}>
    <HeaderContainer />
    <Router>
      <Route path="/" component={PostIndexContainer} />
    </Router>
  </Provider>
);

export default Main;
