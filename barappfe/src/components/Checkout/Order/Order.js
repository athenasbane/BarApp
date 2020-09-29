import React from 'react';
import { connect } from 'react-redux';
import { removeProductFromOrder } from '../../../Redux/actions/order.action';
import { makeStyles, Typography, Grid, Button } from '@material-ui/core';
import DropDown from '../../Inputs/DropDown/DropDown';
import OrderItem from './OrderItem/OrderItem';

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        borderBottom: '1px solid black'
    },
    button: {
        width: '100%'
    }
})

const Order = (props) => {
    const classes = useStyles();
    const [tableOpen, setTableOpen] = React.useState(false);

    const totaller = props.order.length === 0 ? 0 : props.order
        .map(el => el.price * el.volume)
        .reduce((acc, curr) => acc + curr);

    // add to it's own component
    const orderDetails = props.order.map(item => (
        <OrderItem 
            key={item.title + item.subOption + item.volume} 
            item={item} removeItem={props.removeItem}/>
    ))

    return (
        <div>
            <Grid className={classes.root} container direction="column">
                <Grid className={classes.root} container item direction="row">
                    <Grid item xs={4}>
                        <Typography>ITEM</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography>AMOUNT</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography>COST</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography> </Typography>
                    </Grid>
                </Grid>
                {orderDetails}
                <Grid container item direction="column">
                    <Grid item>
                        <Typography>
                            Total:&nbsp;£&nbsp;{totaller.toFixed(2)}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button 
                            className={classes.button} 
                            variant="contained" 
                            color="primary" 
                            onClick={props.checkoutClickHandler}>Back to Menu</Button>
                    </Grid>
                    <Grid 
                        className={classes.button} 
                        item xs={12}>
                        {tableOpen ? 
                            <DropDown data={{ title: 'Table', selectors: ['Table 1', 'Table 2']}}/> 
                            : null}
                        {tableOpen ? <Button 
                            className={classes.button} 
                            variant="contained" 
                            >Confirm Order</Button> : <Button 
                            className={classes.button} 
                            variant="contained" 
                            onClick={() => setTableOpen(!tableOpen)}>Place Order</Button>}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

const mapStateToProps = state => ({
    order: state.order.data
})

const mapDispatchToProps = dispatch => ({
    removeItem: item => {
        dispatch(removeProductFromOrder(item))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);