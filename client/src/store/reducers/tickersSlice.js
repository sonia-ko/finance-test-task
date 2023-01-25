import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tickers: [],
  disabledTickers: ['AAPL'],
  numberOfUserTickers: 0,
  starredTickers: ['FB'],
};

export const tickersSlice = createSlice({
  name: 'tickers',
  initialState,
  reducers: {
    setTickers(state, action) {
      state.tickers = [...action.payload];
    },
    disableTicker(state, action) {
      state.disabledTickers = [...state.disabledTickers, action.payload];
    },
    enableTicker(state, action) {
      state.disabledTickers = state.disabledTickers.filter(
        (el) => el !== action.payload,
      );
    },
    addStarred(state, action) {
      state.starredTickers = [...state.starredTickers, action.payload];
    },
    removeStarred(state, action) {
      state.starredTickers = state.starredTickers.filter(
        (el) => el !== action.payload,
      );
    },
  },
});

export const {
  setTickers,
  disableTicker,
  enableTicker,
  addStarred,
  removeStarred,
} = tickersSlice.actions;

export default tickersSlice.reducer;
