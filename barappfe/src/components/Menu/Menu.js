import React, { useState } from 'react';
import {
  Button,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';

import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const NavBar = () => {
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
  });

  const classes = useStyles();

  const toggleDraw = () => {
    setDrawOpen(!drawOpen);
  };

  return (
    <div className={classes.root}>
      <>
        <Button className={classes.button} color="secondary" onClick={toggleDraw}>
          Menu
        </Button>
        <Drawer anchor="left" open={drawOpen} onClose={toggleDraw}>
          <List className={classes.list}>
            <ListItem>
              <ListItemIcon>
                <RestaurantMenuIcon />
              </ListItemIcon>
              <ListItemText primary="Full Menu" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <LocalBarIcon />
              </ListItemIcon>
              <ListItemText primary="Drinks" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FastfoodIcon />
              </ListItemIcon>
              <ListItemText primary="Food" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Cart" />
            </ListItem>
            <ListItem className={classes.checkout} disabled={checkoutStyles.checkoutDisabled}>
              <ListItemIcon>
                <CheckBoxOutlineBlankIcon />
              </ListItemIcon>
              <ListItemText primary="Checkout" />
            </ListItem>
          </List>
        </Drawer>
      </>
    </div>
  );
};

export default NavBar;
