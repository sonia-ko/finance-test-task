import tickersReducer from './tickersSlice';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  tickers: tickersReducer,
});
