import React from 'react';
import {
    Grid,
    Typography,
    Select,
    TextField,
    FormControlLabel,
    Switch,
    Button,
    makeStyles
} from '@material-ui/core';

import { 
    updateOption, 
} from '../../../../Redux/actions/option.action';

import {
    deleteOption,
    updateDBOption
} from '../../../../Redux/thunks/option.thunk'

import { connect } from 'react-redux';

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
})

const ProductItemOption = (props) => {

    const dropdownValues = props.option.selector ? 
        props.option.selector.join(', ') : [];

    const dropdownChange = (event) => {

        const result = event.target.value.split(', ');
        console.log(result)
        props.setUpdateOption({name: event.target.name, 
            value: event.target.value.split(', '), id: props.option._id});

    }

    const classes = useStyles(); 

    return(
        <Grid className={classes.root} container direction="column">
            <Grid className={classes.center} item xs={12} >
                <Typography>{props.option.optionTitle}</Typography>
            </Grid>
            <Grid className={classes.margin} container item direction="row">
                <Grid className={classes.center} item xs={6}>
                    <Typography>Title:</Typography>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                            required
                            name="optionTitle"
                            label="Required"
                            variant="filled"
                            value={props.option.optionTitle}
                            onChange={event => props.setUpdateOption({name: event.target.name, 
                                value: event.target.value, id: props.option._id})}
                            />
                </Grid>
            </Grid>
            <Grid className={classes.margin} container item direction="row">
                <Grid className={classes.center} item xs={6}>
                    <Typography>Type:</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Select native value={props.option.type} name="type" 
                        onChange={event => props.setUpdateOption({name: event.target.name, 
                            value: event.target.value, id: props.option._id})}>
                        <option value='increment'>Increment</option>
                        <option value='dropdown'>DropDown</option>
                    </Select>
                </Grid>
            </Grid>
            <Grid className={classes.margin} container item direction="row">
                <Grid className={classes.center} item xs={6}>
                    <Typography>Minimum Volume:</Typography>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        name="minVol"
                        type="number"
                        label="Required"
                        variant="filled"
                        value={props.option.minVol}
                        onChange={event => props.setUpdateOption({name: event.target.name, 
                            value: event.target.value, id: props.option._id})}
                        />
                </Grid>
            </Grid>
            <Grid className={classes.margin} container item direction="row">
                <Grid className={classes.center} item xs={6}>
                    <Typography>Price:</Typography>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        name="price"
                        type="number"
                        label="Required"
                        variant="filled"
                        value={props.option.price}
                        onChange={event => props.setUpdateOption({name: event.target.name, 
                            value: event.target.value, id: props.option._id})}
                        />
                </Grid>
            </Grid>
            <Grid className={classes.margin} container item direction="row">
                <Grid item xs={6}>
                </Grid>
                
            </Grid>
            {props.option.type === 'dropdown' ? 
            <Grid className={classes.margin} container item direction="row">
                <Grid className={classes.center} item xs={6}>
                    <Typography>DropDown Options:</Typography>
                </Grid>
                <Grid item xs={6}>
                <TextField
                        required
                        name="selector"
                        label="Seporate with commas! 'Peas, Cheese, Jam'"
                        variant="filled"
                        onChange={(event) => dropdownChange(event)}
                        value={dropdownValues}
                        />
                </Grid>
            </Grid> : null}
            <Grid className={classes.margin} container item direction="row">
                <Grid className={classes.center} item xs={6}>
                    <FormControlLabel
                        control={
                        <Switch
                            checked={props.option.optionActive}
                            onChange={event => props.setUpdateOption({name: event.target.name, 
                                value: event.target.checked, id: props.option._id})}
                            name="optionActive"
                            color="primary"
                        />
                        }
                        label="Active"
                        />
                </Grid>
                <Grid item container xs={6}>
                    <Grid item xs={6}>
                        <Button onClick={() => props.setRemoveOption(props.option._id)} 
                                                variant="contained">Delete</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={() => props.setUpdateDBOption(props.option)} 
                        variant="contained">Save</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

const mapDispatchToProps = dispatch => ({
    setUpdateOption: option => dispatch(updateOption(option)),
    setRemoveOption: id => dispatch(deleteOption(id)),
    setUpdateDBOption: option => dispatch(updateDBOption(option))
})

export default connect(undefined, mapDispatchToProps)(ProductItemOption);