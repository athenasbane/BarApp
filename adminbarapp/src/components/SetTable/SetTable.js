import React from 'react';
import PropTypes from 'prop-types';
import { Grid, makeStyles, Button, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { loadTables, setTables } from '../../Redux/thunks/tables.thunk';
import Table from './Table/Table';

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginBottom: '45px',
  },
  tables: {
    marginTop: '5px',
  },
});

const SetTable = ({ getTables, tablesList, setTables }) => {
  const [tableNumbers, setTableNumbers] = React.useState(0);
  React.useEffect(() => {
    getTables();
  }, [getTables]);

  const tables = tablesList
    ? tablesList.map((table) => <Table key={table._id} table={table} />)
    : null;

  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      item
      direction="column"
      alignContent="center"
      justify="center"
      alignItems="center"
    >
      <Grid
        item
        container
        direction="row"
        justify="center"
        alignItems="center"
        alignContent="center"
        xs={12}
      >
        <Grid item>
          <TextField
            onChange={(event) => setTableNumbers(event.target.value)}
            id="standard-number"
            label="Number of Tables:"
            type="number"
            value={tableNumbers}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item>
          <Button onClick={() => setTables(tableNumbers)} variant="contained">
            Set Tables
          </Button>
        </Grid>
        <Grid
          className={classes.tables}
          container
          item
          spacing={1}
          direction="row"
          justify="center"
          alignContent="center"
          alignItems="center"
          xs={12}
        >
          {tables}
        </Grid>
      </Grid>
    </Grid>
  );
};

SetTable.propTypes = {
  getTables: PropTypes.func.isRequired,
  tablesList: PropTypes.arrayOf(PropTypes.object),
  setTables: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tablesList: state.tables.tableData,
});

const mapDispatchToProps = (dispatch) => ({
  getTables: () => dispatch(loadTables()),
  setTables: (number) => dispatch(setTables(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SetTable);
