import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, makeStyles, Typography, FormControlLabel, Switch } from '@material-ui/core';
import { connect } from 'react-redux';
import { updateTable } from '../../../Redux/thunks/tables.thunk';

const useStyles = makeStyles({
  root: {
    width: '200px',
    backgroundColor: '#ccc',
    padding: '20px',
  },
});

const Table = ({ updateActive, table }) => {
  const classes = useStyles();
  const handleChange = (id) => {
    updateActive(id);
  };

  return (
    <Grid container item xs={4}>
      <Paper className={classes.root} elevation={3}>
        <Grid container item direction="row">
          <Grid item xs={7}>
            <Typography>Table No. {table.tableNum}</Typography>
          </Grid>
          <Grid container item xs={5} direction="column">
            <FormControlLabel
              control={
                <Switch
                  checked={table.tableActive}
                  onChange={() => handleChange(table._id)}
                  name="tableActive"
                />
              }
              label="Active"
            />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

Table.propTypes = {
  table: PropTypes.shape({
    tableActive: PropTypes.bool.isRequired,
    tableNum: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
  }),
  updateActive: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  updateActive: (id) => dispatch(updateTable(id)),
});

export default connect(undefined, mapDispatchToProps)(Table);
