import { createStore } from 'redux';
import headerReducer from '../reducers/headerReducer';

const configureStore = (railsProps) => (
  createStore(headerReducer, railsProps)
)

export default configureStore;
