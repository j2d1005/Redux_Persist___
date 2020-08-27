import { combineReducers } from 'redux';

import counter from './counter.reducer';
import counter2 from './counter.reducer2';

const rootReducer = combineReducers({
    counter,
    counter2
});

export default rootReducer;