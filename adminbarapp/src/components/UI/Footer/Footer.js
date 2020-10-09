import React from 'react';
import { Grid, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    left: 0,
    bottom: 0,
    backgroundColor: '#ccc',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    textAlign: 'center',
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container item>
      <Button className={classes.button} variant="contained">
        Save
      </Button>
    </Grid>
  );
};

export default Footer;
