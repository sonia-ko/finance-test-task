import classes from './Finance.module.css';
import socketIOClient from 'socket.io-client';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setTickers } from '../../store/reducers/tickersSlice';

import TickerItem from '../../components/TickerItem/TickerItem';

const TickersContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = socketIOClient('http://localhost:4000');
    socket.emit('start');
    socket.on('ticker', (data) => {
      dispatch(setTickers(data));
    });
  }, [dispatch]);

  const tickers = useSelector((state) => state.tickers.tickers);

  return (
    <>
      {tickers.length !== 0 && (
        <ul data-testid={'tickersList'} className={classes.tickersContainer}>
          {tickers.map((el) => {
            return (
              <TickerItem
                key={`${el.ticker} ${el.lastTradeTime}`}
                ticker={el.ticker}
                price={el.price}
                exchange={el.exchange}
                change={el.change}
                dividend={el.dividend}
                changePercent={el.change_percent}
              />
            );
          })}
        </ul>
      )}

      {tickers.length === 0 && <h2>Failed to connect to websocket server</h2>}
    </>
  );
};

export default TickersContainer;
