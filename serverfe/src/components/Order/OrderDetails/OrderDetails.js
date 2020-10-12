import React from 'react';
import {
    Grid,
    Button,
    makeStyles
} from '@material-ui/core';
import OrderItem from '../OrderItem/OrderItem';

const useStyles = makeStyles({
    root: {
        width: '100%'
    },
    buttonBox: {
        marginTop: '10px'
    },
})

const OrderDetails = props => {
    const classes = useStyles();
    const orderItems = props.order.orderedItems.map(item => (
        <OrderItem key={item.optionId} item={item}/>));

    return (
        <Grid className={classes.root} container alignItems="center" justify="center" spacing={5}>
            <Grid item>
                {orderItems}
            </Grid>
            <Grid className={classes.buttonBox} container item direction="row" spacing={2}>
                <Grid item xs={6}>
                    <Button
                        fullWidth
                        onClick={props.toggleColor} variant="contained">Working On</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button 
                        fullWidth 
                        onClick={() => props.deliveredHandler(props.order._id)} 
                        variant="contained">Delivered</Button>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default OrderDetails;