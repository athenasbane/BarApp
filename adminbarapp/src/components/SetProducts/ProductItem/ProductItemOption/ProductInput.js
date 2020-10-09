import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  center: {
    textAlign: 'right',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  margin: {
    marginBottom: '5px',
  },
});

export default function ProductInput({ title, name, label, type, value, changeHandler, id }) {
  const classes = useStyles();
  return (
    <Grid className={classes.margin} container item direction="row">
      <Grid className={classes.center} item xs={6}>
        <Typography>{title}</Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          required
          name={name}
          label={label}
          variant="filled"
          type={type}
          value={value}
          onChange={(event) => changeHandler(event, id)}
        />
      </Grid>
    </Grid>
  );
}

ProductInput.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  changeHandler: PropTypes.func.isRequired,
  id: PropTypes.string,
};
