import classes from './PageNotFound.module.css';

import React from 'react';

import PageNotFoundImg from '../../assets/pageNotFound.jpg';
const PageNotFound = () => {
  return (
    <div className={classes.container}>
      <h1>404 - Page not found</h1>
      <img className={classes.img} src={PageNotFoundImg} alt='Page not found' />
    </div>
  );
};

export default PageNotFound;
