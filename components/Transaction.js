import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  scan: {
    marginTop: 20
  }
}));

export default function Scan(props) {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.scan}>
      <CardContent>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography>Loading station transactions</Typography>
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <CardContent>
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={3} sm={3} md={3} lg={3}>
            <Typography>Apr 30, 12:30</Typography>
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3}>
            <Typography>C1</Typography>
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3}>
            <Typography>39239</Typography>
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3}>
            <Typography>500.00</Typography>
          </Grid>
        </Grid>
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={3} sm={3} md={3} lg={3}>
            <Typography>Apr 30, 12:30</Typography>
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3}>
            <Typography>C1</Typography>
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3}>
            <Typography>13315</Typography>
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3}>
            <Typography>500.00</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Paper>
  );
}
