import React from 'react';
import {
    makeStyles,
    Grid
} from '@material-ui/core';
import socketIOClient from 'socket.io-client';
import { backendURL } from '../../constants';
import Order from '../Order/Order';
const socket = socketIOClient(backendURL);

const useStyles = makeStyles({
    root: {
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
        overflow: 'scroll'
    }
});

const Canvas = () => {
    const [ orderData, setOrderData ] = React.useState([]);
    
    const getData = async () => {
        try {
            let response = await fetch(backendURL + '/order');
            let data = await response.json();
            setOrderData(data);
        } catch (e) {
            console.log(e)
        } 
    };

    React.useEffect(() => {
        socket.on('NewOrder', data => {
            setOrderData((oldState = []) => {
                setOrderData([...oldState, data]);
            });
        });
    }, []);

    React.useEffect(() => {
        getData();
    }, []);

    const deliveredHandler = async (id) => {
        await fetch(backendURL + `/order/${id}`, {
            method: 'PATCH',
        });
        await getData();
    };

    const orders = orderData.filter(order => {
        if (order.delivered) { 
            return false;
        }
        return true;
        }).map(order => (<Order order={order} 
                    key={order._id} 
                    deliveredHandler={deliveredHandler}/>)
        );

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container direction="column" spacing={1}>
                {orders}
            </Grid>
        </div>
    );
}

export default Canvas;