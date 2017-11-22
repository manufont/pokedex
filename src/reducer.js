import { combineReducers } from 'redux';

import list from './scenes/List/reducer';
import details from './scenes/Details/reducer';

const rootReducer = combineReducers({
  list,
  details,
});

export default rootReducer;
