import getTickerFullName from '../../helpers/getTickerFullName';
import getTickerColor from '../../helpers/getTickerColor';
import classes from './TickerItem.module.css';

import React, { useEffect, useState } from 'react';
import usePreviousValue from '../../hooks/usePreviousValue';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { disableTicker } from '../../store/reducers/tickersSlice';
import { enableTicker } from '../../store/reducers/tickersSlice';
import { addStarred } from '../../store/reducers/tickersSlice';
import { removeStarred } from '../../store/reducers/tickersSlice';

import PlusIcon from './PlusIcon';
import MinusIcon from './MinusIcon';
import StarIcon from './StarIcon';

const TickerItem = ({
  change,
  changePercent,
  dividend,
  exchange,
  price,
  ticker,
}) => {
  const [changeColor, setChangeColor] = useState('transparent');
  const [priceDifference, setPriceDifference] = useState(0);
  const [priceChangeSign, setPriceChangeSign] = useState('');

  const prevPrice = usePreviousValue(Number(price));

  const dispatch = useDispatch();

  const disabledTickers = useSelector((state) => state.tickers.disabledTickers);
  const starredTickers = useSelector((state) => state.tickers.starredTickers);

  const newPrice = Number(price);
  useEffect(() => {
    if (!prevPrice) {
      return;
    }
    if (prevPrice > newPrice) {
      setChangeColor('#B28077');
      setPriceDifference((prevPrice - newPrice).toFixed(2));
      setPriceChangeSign('-');
    }
    if (newPrice > prevPrice) {
      setChangeColor('#C7FCA6');
      setPriceDifference((newPrice - prevPrice).toFixed(2));
      setPriceChangeSign('+');
    }
    if (price === newPrice) {
      setPriceDifference(0);
      setChangeColor('transparent');
      setPriceChangeSign('');
    }
  }, [price, newPrice, prevPrice]);

  const isIconStarred = starredTickers.includes(ticker);

  return (
    <li
      className={`${classes.container} ${
        disabledTickers.includes(ticker) ? 'disabled' : 'enabled'
      }`}
    >
      {disabledTickers.includes(ticker) ? (
        <>
          <span className={`${classes.disabledLabel} ${classes.label}`}>
            {ticker}
          </span>
          <span className={`${classes.disabledName} ${classes.name}`}>
            {getTickerFullName(ticker)}
          </span>
          <button
            onClick={() => {
              dispatch(enableTicker(ticker));
            }}
            className={classes.iconContainer}
            data-testid={`${ticker}-enableTicker`}
          >
            <PlusIcon />
          </button>
        </>
      ) : (
        <>
          <span
            className={classes.label}
            style={{ backgroundColor: getTickerColor(ticker) }}
          >
            {ticker}
          </span>
          <span className={classes.name}>{getTickerFullName(ticker)}</span>
          <span className={classes.price}>{price}</span>
          <span
            style={{ backgroundColor: changeColor }}
            className={classes.priceChange}
          >
            {priceChangeSign}
            {priceDifference}
          </span>
          <span className={classes.percent}>{change}</span>
          <span className={classes.changePercent}>{changePercent}</span>
          <span className={classes.divident}>{dividend}</span>
          <span className={classes.exchange}>{exchange}</span>
          <button
            onClick={() => {
              dispatch(disableTicker(ticker));
            }}
            className={classes.iconContainer}
            data-testid={`${ticker}-disableTicker`}
          >
            <MinusIcon />
          </button>

          <button
            onClick={() => {
              isIconStarred
                ? dispatch(removeStarred(ticker))
                : dispatch(addStarred(ticker));
            }}
            className={classes.iconContainer}
          >
            <StarIcon enabled={starredTickers.includes(ticker)} />
          </button>
        </>
      )}
    </li>
  );
};

export default TickerItem;
