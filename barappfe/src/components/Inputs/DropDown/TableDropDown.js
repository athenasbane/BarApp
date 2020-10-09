import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, Grid } from '@material-ui/core';

const TableDropDown = ({ tableSelection, setTableSelection, tableData }) => (
  <div>
    <FormControl>
      <Grid container direction="column">
        <Grid container item>
          <Grid item xs={6}>
            <InputLabel>Table:</InputLabel>
          </Grid>
        </Grid>
        <Grid item>
          <Select native value={tableSelection} onChange={(e) => setTableSelection(e.target.value)}>
            <option aria-label="None" value=" " defaultValue />
            {tableData.map((selector) => {
              if (selector.tableActive) {
                return (
                  <option key={selector._id} value={selector.tableNum}>
                    {selector.tableNum}
                  </option>
                );
              }
              return (
                <option key={selector._id} disabled value={selector.tableNum}>
                  Unavailable - {selector.tableNum}
                </option>
              );
            })}
          </Select>
        </Grid>
      </Grid>
    </FormControl>
  </div>
);

TableDropDown.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object),
  tableSelection: PropTypes.object,
  setTableSelection: PropTypes.func.isRequired,
};

export default TableDropDown;
