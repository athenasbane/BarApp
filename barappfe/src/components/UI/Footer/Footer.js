import React from 'react';
import { makeStyles, Button, Grid } from '@material-ui/core';
import Checkout from '../../Checkout/Checkout';
import { connect } from 'react-redux';

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
        borderRight: '1px solid black'
    }
})

const Footer = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const checkoutClickHandler = () => {
        setOpen(!open)
    };

    return(
    <div className={classes.root}>
        <Checkout 
            open={open} 
            checkoutClickHandler={checkoutClickHandler}/>
        <Grid container direction="row">
            <Grid 
                className={classes.border} item xs={6}>
                <Button 
                    className={classes.button} 
                    disabled={props.order.length <= 0} 
                    color="secondary" 
                    onClick={checkoutClickHandler}>
                        Basket&nbsp;({props.order.length})
                </Button>
            </Grid>
            <Grid item xs={6}>
                <Button
                    className={classes.button} 
                    disabled={props.order.length <= 0} 
                    color="secondary" onClick={checkoutClickHandler}>
                        CHECKOUT
                </Button>
            </Grid>
        </Grid>
        
    </div>
)};

const mapStateToProps = state => ({
    order: state.order.orderData
})

export default connect(mapStateToProps)(Footer);