import React from 'react';
import {
    Grid, 
    Typography,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        border: '2px solid black',
        width: '80vw'
    }
})

const OrderItem = props => {
    const classes = useStyles();
    return (
        <Grid className={classes.root} justify="center" container item direction="row" spacing={2}>
            <Grid item>
                <Typography><strong>Title:</strong>&nbsp;{props.item.title}</Typography>
            </Grid>
            <Grid item>
                <Typography><strong>Option:</strong>&nbsp;{props.item.subOption}</Typography>
            </Grid>
            <Grid item>
                <Typography><strong>Volume:</strong>&nbsp;{props.item.volume}</Typography>
            </Grid>
        </Grid>
    );
}

export default OrderItem;