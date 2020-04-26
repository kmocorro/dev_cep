import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EmojiFoodBeverageOutlined from '@material-ui/icons/EmojiFoodBeverageOutlined';
import ExitToAppOutlined from '@material-ui/icons/ExitToAppOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import MomentUtils from '@date-io/moment';
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import { Button } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBarTitle: {
    flex: 1
  },
  dashdate: {
    margin: 20
  }
}));

export default function DashData(props) {
  const classes = useStyles();
  return (
    <div className={classes.dashdate}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Typography>Receipts</Typography>
            <Typography variant="h2">
              {
                props.transactionCount[0] && props.transactionCount[0] !== 'null' && props.transactionCount[0] !== 'undefined' ?
                props.transactionCount[0].queryresult
                : 0
              }
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Typography>Net Sales</Typography>
            <Typography  variant="h2">
              {
                props.netSales[0] && props.netSales[0] !== 'null' && props.netSales[0] !== 'undefined' ?
                props.netSales[0].queryresult
                : 0
              }
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Typography>Total Loaded Amount</Typography>
            <Typography  variant="h2">
              {
                props.totalLoadedAmount[0] && props.totalLoadedAmount[0] !== 'null' && props.totalLoadedAmount[0] !== 'undefined' ?
                props.totalLoadedAmount[0].queryresult
                : 0
              }
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
