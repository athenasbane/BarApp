import React from 'react';
import {
    Container,
    makeStyles
} from '@material-ui/core';
import Products from '../../Products/Products';

const useStyles = makeStyles({
    root: {
        width: '100%',
        margin: 0,
        padding: 0
    }
})


const Body = (props) => {
    const classes = useStyles();
    return (
        <Container className={classes.root} fixed>
            <Products />
        </Container>
    );
};

export default Body;