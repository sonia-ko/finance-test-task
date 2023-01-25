import { Link } from 'react-router-dom';
import React from 'react';

import classes from './Header.module.css';

import logo from '../../assets/logo-finance-app.png';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={`container ${classes.container}`}>
        <img className={classes.logo} src={logo} alt='Finance App Logo' />

        <nav>
          <ul className={classes.menu}>
            <li>
              <Link className={classes.menuItem} to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link
                data-testid='finances-button'
                className={classes.menuItem}
                to='/finances'
              >
                Finances
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
