import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Button, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import Checkout from '../../Checkout/Checkout';

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
  border: {
    borderRight: '1px solid black',
  },
});

export const Footer = ({ order }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const checkoutClickHandler = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <Checkout open={open} checkoutClickHandler={checkoutClickHandler} />
      <Grid container direction="row">
        <Grid className={classes.border} item xs={6}>
          <Button
            className={classes.button}
            disabled={order.length <= 0}
            color="secondary"
            onClick={checkoutClickHandler}
          >
            Basket&nbsp;({order.length})
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            className={classes.button}
            disabled={order.length <= 0}
            color="secondary"
            onClick={checkoutClickHandler}
          >
            CHECKOUT
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

Footer.propTypes = {
  order: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
  order: state.order.orderData,
});

export default connect(mapStateToProps)(Footer);
