import React from 'react';

import {
    Accordion,
    makeStyles,
    Typography,
    AccordionSummary,
    AccordionDetails
} from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import ProductForm from './ProductForm/ProductForm';

const useStyles = makeStyles({
    root: {
        width: '100%',
        marginTop: '2px'
    },
    paperEven: {
        backgroundColor: '#C0C0C0',
        textAlign: 'center',
    },
    paperOdd: {
        backgroundColor: '#D3D3D3',
        textAlign: 'center',
    },
    subHeading: {
        marginLeft: '100px'
    }
});


const ProductItem = (props) => {
    const classes = useStyles();
    const [ expanded, setExpanded ] = React.useState(false);

    const handleChange = (title) => (event, isExpanded) => {
        setExpanded(isExpanded ? title : false);
    };

    return (
        <Accordion expanded={expanded === props.title} 
        className={props.index % 2 === 1 ? classes.paperOdd : classes.paperEven} 
        onChange={handleChange(props.title)} disabled={!props.active}>
            <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls={props.title + '-content'}
                id={props.title + '-header'}>
                    <Typography>{props.title}</Typography>
                    {!props.active ? <Typography className={classes.subHeading}>Sold Out</Typography> : null}
            </AccordionSummary>
            <AccordionDetails>
                    <ProductForm title={props.title} id={props.id} handleChange={handleChange(props.title)} />
            </AccordionDetails>
        </Accordion>
    );
};

export default ProductItem;