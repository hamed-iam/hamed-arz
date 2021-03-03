import React from 'react';
import styles from './Header.module.css';
import { Button } from '@material-ui/core';
import logo from '../../images/b5854e0a-61c2-42db-9a8b-eee225b06199_200x200.png';
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="Hamed Ghazali" />
        </div>
        <div className={styles.heading}>نرخ ارز</div>
        {/* <div className={styles.about}>
          <Button variant="contained" color="secondary">
            About
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
