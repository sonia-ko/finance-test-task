import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Home.module.css';

import bannerImg from '../../assets/home/finances-b.jpg';

import { homeHeading, homeParagraph } from '../../static/texts';

const Home = () => {
  return (
    <main className={classes.container}>
      <img className={classes.img} src={bannerImg} alt='Finances main' />
      <div className={classes.informationBlock}>
        <h1>{homeHeading}</h1>
        <p data-testid='home-paragraph' className={classes.text}>
          {homeParagraph}
        </p>
        <button>
          <Link
            data-testid='go-to-finances'
            className={classes.link}
            to='/finances'
          >
            Go to finances
          </Link>
        </button>
      </div>
    </main>
  );
};

export default Home;
