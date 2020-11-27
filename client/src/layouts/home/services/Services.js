import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import WebIcon from '@material-ui/icons/Web';
import DevicesIcon from '@material-ui/icons/Devices';

import ServiceCard from './ServiceCard';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));

const Services = () => {
  const classes = useStyles();

  const services=[
    {
      title: 'Desktop Application Development',
      description:'Our team develop, test and maitain any type of desktop application. We use electronjs, reactjs, redux and material ui to develop this type of application',
      icon: DesktopMacIcon
    },
    {
      title: 'Web Application Development',
      description:'Our team develop, test, maitain and deploy any type of web application. We use javascript, nodejs, expressjs, reactjs, redux and material ui to develop this type of application',
      icon: WebIcon
    },
    {
      title: 'Mobile Application Development',
      description:'Our team develop, test and maitain any type of mobile application. We use javascript, react native and redux to develop this type of application',
      icon: DevicesIcon
    }
  ]

  return (
    <div className={classes.root} id="services" style={{marginTop:30}}>
      <div className={classes.content}>
        <Grid container spacing={3} >
          <Grid item lg={12} md={12} xs={12} style={{textAlign:'center', marginBottom:40}}>
            <Typography variant="h2">Our Services</Typography>
          </Grid>
          {services.map((service, index) => (
            <Grid
              item
              key={index}
              lg={4}
              md={6}
              xs={12}
            >
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Services;
