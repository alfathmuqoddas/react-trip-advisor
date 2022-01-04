import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlinedIcon';
import Rating from '@material-ui/lab';

import useStyles from './styles.js';

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px');
  const coordinates = { lat: 0, lng: 0 };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBzIF0cYUYBg7HiYBHyJl4wlm7D2_hbugo' }}
        defaultCenter={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}
      ></GoogleMapReact>
      <h1>Map</h1>
    </div>
  );
};

export default Map;
