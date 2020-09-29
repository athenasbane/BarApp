import React from 'react';
import {
    Grid,
    makeStyles,
    Button,
    TextField
} from '@material-ui/core';
import { connect } from 'react-redux';

import Table from '../SetTable/Table/Table';

const useStyles = makeStyles({
    root: {
        width: "100%"
    }
});

const SetTable = (props) => {

    const tables = props.tablesList ? props.tablesList.map(table => <Table />) : <div></div>

    const classes = useStyles();
    return (
        <Grid className={classes.root} container item direction="row">
            <Grid item>
                <Button variant="contained">SAVE TABLES</Button>
            </Grid>
            <Grid item container direction="row">
                <Grid item>
                    <TextField
                        id="standard-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{ shrink: true, }}
                        />
                </Grid>
                <Grid item>
                    <Button variant="contained">Set Tables</Button>
                </Grid>
                <Grid item>
                    {tables}
                </Grid>
            </Grid>
        </Grid>
    );
};

const mapStateToProps = state => ({
    tablesList: state.tableData
});

const mapDispatchToProps = dispatch => ({
    getTables: () => dispatch()
})

export default connect(mapStateToProps, mapDispatchToProps)(SetTable);
