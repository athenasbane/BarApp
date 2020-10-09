import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, makeStyles } from '@material-ui/core';

import { connect } from 'react-redux';
import MenuDrawer from './MenuDrawer/MenuDrawer';

const Menu = ({ authed }) => {
  const [drawOpen, setDrawOpen] = useState(false);
  const [checkoutStyles] = useState({
    checkoutColor: '#ccc',
    checkoutDisabled: true,
  });

  const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    list: {
      width: '250px',
    },
    checkout: {
      backgroundColor: checkoutStyles.checkoutColor,
    },
    button: {
      width: '100%',
      backgroundColor: '#eee',
    },
    link: {
      color: 'black',
    },
  });

  const classes = useStyles();
  const toggleDraw = () => {
    setDrawOpen(!drawOpen);
  };

  return (
    <div className={classes.root}>
      <>
        <Button
          className={classes.button}
          disabled={!authed}
          color="secondary"
          onClick={toggleDraw}
        >
          Menu
        </Button>
        <MenuDrawer toggleDraw={toggleDraw} drawOpen={drawOpen} />
      </>
    </div>
  );
};

Menu.propTypes = {
  authed: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  authed: state.login.authed,
});

export default connect(mapStateToProps)(Menu);
