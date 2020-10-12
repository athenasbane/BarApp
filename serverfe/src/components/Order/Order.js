import React from 'react';
import {
    makeStyles,
    Grid,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import OrderDetails from './OrderDetails/OrderDetails';


export const timeSince = time => {
    const now = new Date(Date.now());
    const newTime = new Date(time);
    const difference = ((now.getTime() - newTime.getTime()) / 1000).toFixed(0);
    if (difference > 60) {
        return `${(difference / 60).toFixed(0)} Minutes ago...`;
    } 
    return `${difference} Seconds ago...`;
};

const Order = props => {
    const [ bgColor, setBgColor ] = React.useState('white');
    const [ fontColor, setFontColor ] = React.useState('black');

    const workingOnHandler = () => {
        setBgColor(bgColor === 'white' ? 'green' : 'white');
        setFontColor(fontColor === 'black' ? 'white' : 'black');
    };

    const useStyles = makeStyles({
        accordion: {
            backgroundColor: bgColor,
            color: fontColor
        }
    });

    const classes = useStyles();
    const [time, setTime] = React.useState(timeSince(props.order.createdAt));
   
    React.useEffect(function (){
        setInterval(() => {
            setTime(timeSince(props.order.createdAt));
        }, 1000);
    });

    return (
        <Grid className={classes.root} item>
            <Accordion className={classes.accordion}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                    <Grid container spacing={5}>
                        <Grid item>
                            <Typography >
                                TABLE NO:&nbsp;{props.order.tableNumber}&nbsp;
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography >
                                Number of Items:&nbsp;{props.order.orderedItems.length}&nbsp;
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography >
                                Time Since Order:&nbsp;{time}&nbsp;
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography >
                                To&nbsp;Pay:&nbsp;£&nbsp;{props.order.totalPrice.toFixed(2)}
                            </Typography>
                        </Grid>
                    </Grid>
                </AccordionSummary>
                <AccordionDetails>
                    <OrderDetails order={props.order} toggleColor={workingOnHandler} 
                        deliveredHandler={props.deliveredHandler}/>
                </AccordionDetails>
            </Accordion>
        </Grid>
    );
}

export default Order;