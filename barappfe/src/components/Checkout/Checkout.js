import React from 'react';
import PropTypes from 'prop-types';
import { Modal, makeStyles, Typography, Grid, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { sendOrder } from '../../Redux/thunks/order.thunk';
import { acknowledgeOrder } from '../../Redux/actions/order.action';
import Order from './Order/Order';

const useStyles = makeStyles({
  paper: {
    position: 'absolute',
    width: '96%',
    backgroundColor: '#ccc',
    border: '1px solid black',
    boxShadow: '5px 10px 10px rgba(0,0,0,0.5)',
    padding: '5px',
    outline: 0,
  },
});

const Checkout = ({ order, checkoutClickHandler, recievedOrder, confirmedOrder, open }) => {
  const classes = useStyles();
  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Your Order:</h2>
      <Order data={order} checkoutClickHandler={checkoutClickHandler} />
    </div>
  );

  const acknowledgeClickHandler = () => {
    recievedOrder();
    checkoutClickHandler();
  };

  const orderConfirmation = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">About your order:</h2>
      <Grid container direction="column">
        <Grid item>
          <Typography>{confirmedOrder[1]}</Typography>
        </Grid>
        <Grid item>
          <Button onClick={acknowledgeClickHandler} variant="contained">
            OK
          </Button>
        </Grid>
      </Grid>
    </div>
  );

  return (
    <Modal open={open} onClose={checkoutClickHandler}>
      {confirmedOrder === '' ? body : orderConfirmation}
    </Modal>
  );
};

Checkout.propTypes = {
  order: PropTypes.arrayOf(PropTypes.object),
  confirmedOrder: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  checkoutClickHandler: PropTypes.func,
  recievedOrder: PropTypes.func,
  open: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  order: state.order.orderData,
  confirmedOrder: state.order.confirmedOrder,
});

const mapDispatchToProps = (dispatch) => ({
  confirmOrder: () => dispatch(sendOrder()),
  recievedOrder: () => dispatch(acknowledgeOrder()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
