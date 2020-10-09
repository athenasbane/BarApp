import React from 'react';
import PropTypes from 'prop-types';
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Link,
} from '@material-ui/core';

import SettingsIcon from '@material-ui/icons/Settings';
import GetAppIcon from '@material-ui/icons/GetApp';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

import { Link as RouterLink } from 'react-router-dom';

export default function MenuDrawer({ drawOpen, toggleDraw }) {
  const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    list: {
      width: '250px',
    },
    link: {
      color: 'black',
    },
  });
  const classes = useStyles();
  return (
    <Drawer anchor="left" open={drawOpen} onClose={toggleDraw}>
      <List className={classes.list}>
        <Link className={classes.link} component={RouterLink} to="/products">
          <ListItem>
            <ListItemIcon>
              <RestaurantMenuIcon />
            </ListItemIcon>
            <ListItemText primary="Set Products" />
          </ListItem>
        </Link>
        <Link className={classes.link} component={RouterLink} to="/tables">
          <ListItem>
            <ListItemIcon>
              <LocalBarIcon />
            </ListItemIcon>
            <ListItemText primary="Set Tables" />
          </ListItem>
        </Link>
        <ListItem>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <GetAppIcon />
          </ListItemIcon>
          <ListItemText primary="Downloads" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckBoxOutlineBlankIcon />
          </ListItemIcon>
          <ListItemText primary="Save All" />
        </ListItem>
      </List>
    </Drawer>
  );
}

MenuDrawer.propTypes = {
  drawOpen: PropTypes.bool,
  toggleDraw: PropTypes.func.isRequired,
};
