import React from 'react';
import {
    Modal,
    makeStyles, 
    Typography,
    Grid,
    Button
} from '@material-ui/core';
import { sendOrder } from '../../Redux/thunks/order.thunk';
import { acknowledgeOrder } from '../../Redux/actions/order.action'
import { connect } from 'react-redux';

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
      }
});

const Checkout = (props) => {
    const classes = useStyles();
    const body = (
        <div className={classes.paper}>
            <h2 id="simple-modal-title">Your Order:</h2>
            <Order data={props.order} checkoutClickHandler={props.checkoutClickHandler} />
        </div>);

    const orderConfirmation = (
        <div className={classes.paper}>
            <h2 id="simple-modal-title">About your order:</h2>
            {props.confirmedOrder[0] === 'Error' ?  <Grid container>
                <Grid item>
                    <Typography>Your order has being confirmed!</Typography>
                </Grid>
                <Grid item>
                    <Typography>Total&nbsp;Price:&nbsp;£&nbsp;
                        {/* {props.confirmedOrder.totalPrice.toFixed(2)} */}
                    </Typography>
                </Grid>
                <Grid item>
                    <Button variant="contained">OK</Button>
                </Grid>
            </Grid>
            :
            <Typography>{props.confirmedOrder[1]}</Typography> 
            }
        </div>
    );

    console.log(props.confirmedOrder.totalPrice)

    return (
        <Modal open={props.open} onClose={props.checkoutClickHandler}>
           {props.confirmedOrder !== [] ? body : orderConfirmation } 
        </Modal>
    );
};

const mapStateToProps = state => ({
    order: state.order.orderData,
    confirmedOrder: state.order.confirmedOrder
});

const mapDispatchToProps = dispatch => ({
    confirmOrder: () => dispatch(sendOrder()),
    recievedOrder: () => dispatch(acknowledgeOrder())
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);