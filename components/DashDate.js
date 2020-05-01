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

export default function DashDatePicker(props) {
  const classes = useStyles();
  return (
    <div className={classes.dashdate}>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <DatePicker
              disableToolbar
              fullWidth
              margin={"dense"}
              autoOk
              variant="inline"
              inputVariant="outlined"
              label="Start Date"
              value={props.startDate}
              onChange={props.handleStartDateChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <DatePicker
              disableToolbar
              fullWidth
              autoOk
              margin={"dense"}
              variant="inline"
              inputVariant="outlined"
              label="End Date"
              value={props.endDate}
              onChange={props.handleEndDateChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <TextField
              id="outlined-select-shift"
              fullWidth
              margin={"dense"}
              select
              label="Shift"
              value={props.shift}
              onChange={props.handleShiftChange}
              variant="outlined"
            >
              <MenuItem key="AM" value="AM">
                AM
              </MenuItem>
              <MenuItem key="PM" value="PM">
                PM
              </MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </Container>
    </MuiPickersUtilsProvider>
    </div>
  );
}
