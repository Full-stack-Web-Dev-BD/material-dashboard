import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  imageContainer: {
    height: 50,
    width: 100,
    margin: '0 auto',
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%'
  },
  statsItem: {
    display: 'flex',
    alignItems: 'center'
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1)
  }
}));

const ServiceCard = props => {
  const { className, service, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <div className={classes.imageContainer}>
          <service.icon style={{width:100, height:50}}/>
        </div>
        <Typography
          align="center"
          gutterBottom
          variant="h4"
        >
          {service.title}
        </Typography>
        <Typography
          align="center"
          variant="body1"
        >
          {service.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

ServiceCard.propTypes = {
  className: PropTypes.string,
  service: PropTypes.object.isRequired
};

export default ServiceCard;
