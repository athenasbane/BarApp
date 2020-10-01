import React from 'react';

import {
    Grid,
    Paper,
    makeStyles, 
    Typography,
    Button,
    FormControlLabel,
    Switch
} from '@material-ui/core';

import { updateTable } from '../../../Redux/thunks/tables.thunk';

import { connect } from 'react-redux';

const useStyles = makeStyles({
    root: {
        width: '200px',
        backgroundColor: '#ccc',
        padding: '20px'
    }
});


const Table = (props) => {
    const classes = useStyles();

    const handleChange = id => {
        props.updateActive(id)
    };

    return (
        <Grid container item xs={4}>
            <Paper 
            className={classes.root}
            elevation={3}
            >
                <Grid container item direction="row">
                    <Grid item xs={7}>
                        <Typography>Table No. {props.table.tableNum}</Typography>
                    </Grid>
                    <Grid item xs={5} direction="column"> 
                        <FormControlLabel
                            control={<Switch 
                                checked={props.table.tableActive} 
                                onChange={() => handleChange(props.table._id)} 
                                name="tableActive" />}
                            label="Active"
                        />
                    </Grid>
                </Grid>
            </Paper>
        </Grid> 
    );
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    updateActive: id => dispatch(updateTable(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);