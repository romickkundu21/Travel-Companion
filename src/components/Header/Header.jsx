import React,{ useState } from 'react'
import { Autocomplete } from '@react-google-maps/api';
import {Typography, AppBar, Toolbar, Box, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';

const Header = ({setCoordinates}) => {

  const classes=useStyles();
  const [autocomplete, setAutocomplete] = useState(null);
  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({ lat, lng });
  };

  return (
    <AppBar className={classes.appbar} position='static'>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h5' className={classes.title1}>
          Travel Companion
        </Typography>
        <Box display='flex'>
          <Typography variant='h6' className={classes.title2}>
            Explore More Places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon/>
              </div>
              <InputBase placeholder="Search..." classes={{root:classes.inputRoot, input:classes.inputInput}}>
              </InputBase>
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
      
    </AppBar>
  )
}

export default Header;