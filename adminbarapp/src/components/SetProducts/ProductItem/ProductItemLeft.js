import React from 'react';
import {
    Grid,
    Typography,
    Button,
    TextField,
    FormControlLabel,
    Switch,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        marginTop: '10px',
        marginBottom: '10px',
        width: '100%',
        textAlign: 'center'
    },
    titleBox: {
        marginBottom: '10px'
    },
    bordered: {
        border: '1px solid black'
    },
    margins: {
        margin: '15px',
        textAlign: 'center',
        justifyContent: 'center'
    }
});

const ProductItemLeft = (props) => {
    
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container direction="row">
                <Grid 
                    container 
                    item 
                    justify="center" 
                    justifycontent="center" 
                    alignItems="center" 
                    direction="column" 
                    xs={12}>
                    <Grid item>
                        <Typography>Title:</Typography> 
                        <TextField
                        className={classes.root}
                        required
                        name="title"
                        label="Required"
                        variant="filled"
                        value={props.product.title}
                        onChange={event => props.handleChange({name: event.target.name, 
                            value: event.target.value, id: props.product._id})}
                        />
                    </Grid>
                    <Grid item>
                        <Typography>Category:</Typography> 
                        <TextField
                            className={classes.root}
                            required
                            name="category"
                            label="Required"
                            variant="filled"
                            value={props.product.category}
                            onChange={event => props.handleChange({name: event.target.name, 
                                value: event.target.value, id: props.product._id})}
                            />
                    </Grid>
                    <Grid item>
                        <Typography>Sub-Category:</Typography> 
                            <TextField
                                className={classes.root}
                                required
                                name="subCategory"
                                label="Required"
                                variant="filled"
                                value={props.product.subCategory}
                                onChange={event => props.handleChange({name: event.target.name, 
                                    value: event.target.value, id: props.product._id})}
                                />
                    </Grid>
                    <Grid className={classes.margins} item >
                        <FormControlLabel
                        control={
                        <Switch
                            checked={props.product.active}
                            onChange={event => props.handleChange({name: event.target.name, 
                                value: event.target.checked, id: props.product._id })}
                            name="active"
                            color="primary"
                        />
                        }label="Active" />
                    </Grid>
                    <Grid className={classes.margins} container item >
                        <Button onClick={() => props.removeProduct(props.product._id)} 
                        variant="contained">Delete</Button>
                    </Grid>
                    <Grid className={classes.margins} container item >
                        <Button onClick={() => props.saveProduct(props.product)} 
                        color="secondary" variant="contained">Save</Button>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default ProductItemLeft;