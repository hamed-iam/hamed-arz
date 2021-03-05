import React from 'react';
import styles from './Header.module.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logo from '../../images/b5854e0a-61c2-42db-9a8b-eee225b06199_200x200.png';
import pig from '../../images/money-saving-piggy-bank-clip-art-cartoon-piggy-banks-d3ea9d1df5e24fd4ba895c8dbfe344db.png';
import InfoIcon from '@material-ui/icons/Info';
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="Hamed Ghazali" />
          </Link>
        </div>
        <div className={styles.about}>
          <Link to="/about">
            <Button variant="contained" color="secondary">
              About
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
