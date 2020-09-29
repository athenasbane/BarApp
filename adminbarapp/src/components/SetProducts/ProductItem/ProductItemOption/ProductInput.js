import React from 'react';

import {
    Grid,
    Typography,
    TextField,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
    center: {
        textAlign: 'right',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    margin: {
        marginBottom: '5px'
    }
});

export default function ProductInput (props) {
    const classes = useStyles();
    return (
        <Grid className={classes.margin} container item direction="row">
            <Grid className={classes.center} item xs={6}>
                <Typography>{props.title}</Typography>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    required
                    name={props.name}
                    label={props.label}
                    variant="filled"
                    type={props.type}
                    value={props.value}
                    onChange={event => props.changeHandler(event, props.id)}
                    />
            </Grid>
        </Grid>
    );
};