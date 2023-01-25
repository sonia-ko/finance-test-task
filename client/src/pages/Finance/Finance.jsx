import classes from './Finance.module.css';
import React from 'react';

import TickersContainer from './TickersContainer';

import banner from '../../assets/finances/finances-tr.jpg';

import { financesHeading } from '../../static/texts';

const Finance = () => {
  return (
    <div className={classes.container}>
      <div className='container'>
        <img
          className={classes.banner}
          src={banner}
          alt='Finances page banner'
        />
        <div>
          <h1>{financesHeading}</h1>

          <TickersContainer />
        </div>
      </div>
    </div>
  );
};

export default Finance;
