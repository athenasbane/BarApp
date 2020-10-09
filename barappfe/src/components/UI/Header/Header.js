import React from 'react';
import { makeStyles } from '@material-ui/core';

import Menu from '../../Menu/Menu';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    left: 0,
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Menu />
    </div>
  );
};

export default Header;
