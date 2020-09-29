import React from 'react';
import {
    Grid,
    Typography,
    Select,
    FormControlLabel,
    Switch,
    Button,
    makeStyles
} from '@material-ui/core';
import ProductInput from './ProductInput';

const useStyles = makeStyles({
    root: {
        marginBottom: '20px',
        paddingBottom: '15px',
        paddingTop: '15px',
        borderBottom: '2px solid black'
    },
    bordered: {
        borderBottom: '1px solid black',
        marginBottom: '5px',
    }, 
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

const ProductItemOption = (props) => {

    const classes = useStyles(); 

    return(
        <Grid className={classes.root} container direction="column">
            <Grid className={classes.center} item xs={12} >
                <Typography>{props.option.optionTitle}</Typography>
            </Grid>
            <ProductInput 
                title="Title"
                name="optionTitle"
                value={props.option.optionTitle}
                changeHandler={props.changeHandler}
                type="text"
            />
            <Grid className={classes.margin} container item direction="row">
                <Grid className={classes.center} item xs={6}>
                    <Typography>Type:</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Select native value={props.option.type} name="type" 
                        onChange={(event) => props.changeHandler(event)}>
                        <option value='increment'>Increment</option>
                        <option value='dropdown'>DropDown</option>
                    </Select>
                </Grid>
            </Grid>
            <ProductInput 
                title="Minimum Volume"
                name="minVol"
                value={props.option.minVol}
                changeHandler={props.changeHandler}
                type="number"
            />
            <ProductInput 
                title="Price"
                name="price"
                value={props.option.price}
                changeHandler={props.changeHandler}
                type="number"
            />
            {props.option.type === 'dropdown' ? 
            <ProductInput 
                title="Dropdown Options:"
                name="selector"
                label="Seporate with commas! 'Peas, Cheese, Jam'"
                value={props.option.selector}
                changeHandler={props.changeHandler}
                type="text"
            />
            : null}
            <Grid className={classes.margin} container item direction="row">
                <Grid className={classes.center} item xs={6}>
                    <FormControlLabel
                        control={
                        <Switch
                            checked={props.option.optionActive}
                            onChange={(event) => props.changeHandler(event)}
                            name="optionActive"
                            color="primary"
                        />
                        }
                        label="Active"
                        />
                </Grid>
                <Grid item container xs={6}>
                    <Grid item xs={6}>
                        <Button onClick={props.handleCancel} 
                            variant="contained">Cancel</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={props.handleSave} 
                            variant="contained">Save</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ProductItemOption;