import React from 'react';
import styles from './About.module.css';
import { Typography } from '@material-ui/core';
import reactLogo from '../images/PinClipart.com_follow-directions-clip-art_5374089.png';
import axiosLogo from '../images/PngItem_913031.png';
import materialLogo from '../images/materialui.png';

const About = () => {
  return (
    <div className={styles.container}>
      <article className={styles.title}>
        <Typography variant="h5">
          Technologies that's been used in this simple project.
        </Typography>
      </article>

      <div className={styles.tech}>
        <ul>
          <li>
            React
            <img src={reactLogo} alt="react-logo" />
          </li>
          <li>
            Axios
            <img src={axiosLogo} alt="" />
          </li>
          <li>
            Material-UI
            <img src={materialLogo} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
