import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, makeStyles, Button } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles({
  root: {
    border: '1px solid black',
    textAlign: 'center',
  },
});

const OrderItem = ({ item, removeItem }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container item direction="row" alignItems="center">
      <Grid item xs={4}>
        <Typography>
          {item.title}
          &nbsp;-&nbsp;
          {item.subOption}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography>{item.volume}</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography>
          £&nbsp;
          {(item.volume * item.price).toFixed(2)}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Button onClick={() => removeItem(item)}>
          <DeleteForeverIcon />
        </Button>
      </Grid>
    </Grid>
  );
};

OrderItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default OrderItem;
