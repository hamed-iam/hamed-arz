import React from 'react';
import styles from './Cards.module.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

const Cards = ({ finalData: { data } }) => {
  if (!data) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={2} justify="center">
        {data.map((items, index) => {
          const { title, p, updated_at } = items;
          return (
            <Grid
              item
              component={Card}
              xs={12}
              md={3}
              className={styles.card}
              key={index}
            >
              <CardContent>
                <Typography variant="h5" color="textSecondary" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="h5" className={styles.price}>
                  <CountUp start={0} end={p} duration={3} separator="," />
                  {` ریال`}
                </Typography>
                <Typography color="textSecondary" className={styles.date}>
                  {updated_at} آخرین تاریخ بروزرسانی
                </Typography>
              </CardContent>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Cards;
