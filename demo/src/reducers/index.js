import { combineReducers } from 'redux';

import { reducer as modalsReducer } from '../../../src';

const rootReducer = combineReducers({
  modals: modalsReducer,
});

export default rootReducer;
