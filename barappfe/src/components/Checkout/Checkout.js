import React from 'react';
import {
    Modal,
    makeStyles
} from '@material-ui/core';
import { sendOrder } from '../../Redux/thunks/order.thunk';

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
        </div>)

    return (
        <Modal open={props.open} onClose={props.checkoutClickHandler}>
           {body} 
        </Modal>
    );
};

const mapStateToProps = state => ({
    order: state.order.data
})

const mapDispatchToProps = dispatch => ({
    confirmOrder: dispatch(sendOrder)
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);