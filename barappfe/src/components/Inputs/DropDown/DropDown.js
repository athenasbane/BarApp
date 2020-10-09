import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, Grid, Typography, Button } from '@material-ui/core';

const DropDown = ({ addItemHandler, data }) => {
  const [selection, setSelection] = React.useState('');

  const addItem = () => {
    addItemHandler(`${data.optionTitle} - ${selection}`, 1, data.price, data._id);
    setSelection('');
  };

  return (
    <div>
      <FormControl>
        <Grid container direction="column">
          <Grid container item>
            <Grid item xs={6}>
              <InputLabel>{data.optionTitle}</InputLabel>
            </Grid>
            {data.price ? (
              <Grid item xs={6}>
                <Typography>£&nbsp;{data.price.toFixed(2)}</Typography>
              </Grid>
            ) : null}
          </Grid>
          <Grid item>
            <Select native value={selection} onChange={(e) => setSelection(e.target.value)}>
              <option aria-label="None" value=" " defaultValue />
              {data.selector.map((selector) => {
                if (data.optionActive) {
                  return (
                    <option key={selector} value={selector}>
                      {selector}
                    </option>
                  );
                }
                return (
                  <option key={selector} disabled value={selector}>
                    Sold out - {selector}
                  </option>
                );
              })}
            </Select>
          </Grid>
          <Grid item xs={3}>
            <Button disabled={!data.optionActive} variant="contained" onClick={() => addItem()}>
              Add
            </Button>
          </Grid>
        </Grid>
      </FormControl>
    </div>
  );
};

DropDown.propTypes = {
  data: PropTypes.shape({
    optionTitle: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    _id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    optionActive: PropTypes.bool.isRequired,
    selector: PropTypes.arrayOf(PropTypes.string),
  }),
  addItemHandler: PropTypes.func.isRequired,
};

export default DropDown;
