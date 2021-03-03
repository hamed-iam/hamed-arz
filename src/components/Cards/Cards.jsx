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
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={styles.card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {data[0].title}
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={data[0].p} duration={3} separator="," />
              {` ریال`}
            </Typography>
            <Typography color="textSecondary">
              {data[0].updated_at} آخرین تاریخ بروزرسانی
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={styles.card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {data[1].title}
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={data[1].p} duration={3} separator="," />
              {` ریال`}
            </Typography>
            <Typography color="textSecondary">
              {data[1].updated_at} آخرین تاریخ بروزرسانی
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={styles.card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {data[2].title}
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={data[2].p} duration={3} separator="," />
              {` ریال`}
            </Typography>
            <Typography color="textSecondary">
              {data[2].updated_at} آخرین تاریخ بروزرسانی
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={styles.card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {data[3].title}
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={data[3].p} duration={3} separator="," />
              {` ریال`}
            </Typography>
            <Typography color="textSecondary">
              {data[3].updated_at} آخرین تاریخ بروزرسانی
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={styles.card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {data[4].title}
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={data[4].p} duration={3} separator="," />
              {` ریال`}
            </Typography>
            <Typography color="textSecondary">
              {data[4].updated_at} آخرین تاریخ بروزرسانی
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={styles.card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {data[5].title}
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={data[5].p} duration={3} separator="," />
              {` ریال`}
            </Typography>
            <Typography color="textSecondary">
              {data[5].updated_at} آخرین تاریخ بروزرسانی
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={styles.card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {data[6].title}
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={data[6].p} duration={3} separator="," />
              {` ریال`}
            </Typography>
            <Typography color="textSecondary">
              {data[6].updated_at} آخرین تاریخ بروزرسانی
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={styles.card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {data[7].title}
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={data[7].p} duration={3} separator="," />
              {` ریال`}
            </Typography>
            <Typography color="textSecondary">
              {data[7].updated_at} آخرین تاریخ بروزرسانی
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={styles.card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {data[8].title}
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={data[8].p} duration={3} separator="," />
              {` ریال`}
            </Typography>
            <Typography color="textSecondary">
              {data[8].updated_at} آخرین تاریخ بروزرسانی
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={styles.card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {data[9].title}
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={data[9].p} duration={3} separator="," />
              {` ریال`}
            </Typography>
            <Typography color="textSecondary">
              {data[9].updated_at} آخرین تاریخ بروزرسانی
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={styles.card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {data[10].title}
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={data[10].p} duration={3} separator="," />
              {` ریال`}
            </Typography>
            <Typography color="textSecondary">
              {data[10].updated_at} آخرین تاریخ بروزرسانی
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={styles.card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {data[11].title}
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={data[11].p} duration={3} separator="," />
              {` ریال`}
            </Typography>
            <Typography color="textSecondary">
              {data[11].updated_at} آخرین تاریخ بروزرسانی
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={styles.card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {data[12].title}
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={data[12].p} duration={3} separator="," />
              {` ریال`}
            </Typography>
            <Typography color="textSecondary">
              {data[12].updated_at} آخرین تاریخ بروزرسانی
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={styles.card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {data[13].title}
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={data[13].p} duration={3} separator="," />
              {` ریال`}
            </Typography>
            <Typography color="textSecondary">
              {data[13].updated_at} آخرین تاریخ بروزرسانی
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={styles.card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {data[14].title}
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={data[14].p} duration={3} separator="," />
              {` ریال`}
            </Typography>
            <Typography color="textSecondary">
              {data[14].updated_at} آخرین تاریخ بروزرسانی
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={styles.card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {data[15].title}
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={data[15].p} duration={3} separator="," />
              {` ریال`}
            </Typography>
            <Typography color="textSecondary">
              {data[15].updated_at} آخرین تاریخ بروزرسانی
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={styles.card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {data[16].title}
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={data[16].p} duration={3} separator="," />
              {` ریال`}
            </Typography>
            <Typography color="textSecondary">
              {data[16].updated_at} آخرین تاریخ بروزرسانی
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
