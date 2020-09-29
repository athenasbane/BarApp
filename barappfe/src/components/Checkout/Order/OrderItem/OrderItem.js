import React from 'react';

import {
    Grid,
    Typography,
    makeStyles,
    Button
} from '@material-ui/core';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles({
    root: {
        border: '1px solid black',
        textAlign: 'center'
    },
});

const OrderItem = (props) => {
    const classes = useStyles();
    return (
        <Grid 
            className={classes.root} 
            container 
            item direction="row" 
            alignItems="center">
            <Grid item xs={4}>
                <Typography>{props.item.title}&nbsp;-&nbsp;{props.item.subOption}</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography>{props.item.volume}</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography>£&nbsp;{(props.item.volume * props.item.price).toFixed(2)}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Button onClick={() => props.removeItem(props.item)}><DeleteForeverIcon /></Button>
            </Grid>
        </Grid>
    );
};

export default OrderItem;