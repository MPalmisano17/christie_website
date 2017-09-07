import ReactOnRails from 'react-on-rails';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'

import composeInitialState from '../util/componseInitialState'

import AppRouter from './AppRouter';

// This is how react_on_rails can see the HelloWorld in the browser.
const App = (props, railsContext, domNodeId) => {
  // const combinedReducer = combineReducers(reducers)
  const combinedProps = composeInitialState(props, railsContext)

  // This is where we'll put in the middleware for the async function. Placeholder.
  // TODO: Store setup
  // store will have helloWorldData as a top level property
  // const store = createStore(combinedReducer, combinedProps, applyMiddleware(thunkMiddleware))

  // renderApp is a function required for hot reloading. see
  const renderApp = (ApplicationRouter) => {
    const application = (
      <AppContainer>
        <ApplicationRouter />
      </AppContainer>
    )
    render(application, document.getElementById(domNodeId))
  }

  renderApp(AppRouter)

  if (module.hot) {
    module.hot.accept(['./AppRouter'], () => {
      // TODO: Redux Thunk
      // store.replaceReducer(combineReducers(reducers));
      renderApp(AppRouter)
    })
  }
}
ReactOnRails.register({App});
