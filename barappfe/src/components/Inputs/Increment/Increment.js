import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormControl, InputLabel, Grid, makeStyles, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: '#eee',
    height: '100px',
    paddingTop: '15px',
    marginTop: '10px',
  },
  textBox: {
    width: '30px',
  },
});

const Increment = ({ data, addItemHandler }) => {
  const classes = useStyles();
  const [volume, setVolume] = React.useState(0);
  const handleInput = (event) => {
    if (event.target.value < 1) {
      setVolume(0);
    }
    setVolume(event.target.value);
  };
  const activeValidation = () => {
    if (!data.optionActive) {
      return true;
    }
    if (volume > data.minVol) {
      return false;
    }
    return true;
  };
  const addItem = () => {
    addItemHandler(data.optionTitle, volume, data.price, data._id);
    setVolume(0);
  };
  return (
    <div className={classes.root}>
      <Grid container direction="row">
        <Grid item xs={6}>
          <InputLabel>
            {data.optionTitle}
            {data.optionActive ? null : ' - SOLD OUT'}
          </InputLabel>
        </Grid>
        <Grid item xs={6}>
          <Typography>£&nbsp;{data.price.toFixed(2)}</Typography>
        </Grid>
      </Grid>
      <FormControl>
        <Grid
          container
          spacing={2}
          justify="center"
          alignContent="center"
          direction="row"
          alignItems="center"
        >
          <Grid item xs={3}>
            <Button
              disabled={activeValidation()}
              onClick={() => setVolume((prevState) => prevState - 1)}
            >
              <RemoveIcon />
            </Button>
          </Grid>
          <Grid item xs={3}>
            <input
              disabled={!data.optionActive}
              className={classes.textBox}
              onChange={(event) => handleInput(event)}
              type="number"
              value={volume}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              disabled={!data.optionActive}
              onClick={() => setVolume((prevState) => prevState + 1)}
            >
              <AddIcon />
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button disabled={activeValidation()} variant="contained" onClick={() => addItem()}>
              Add
            </Button>
          </Grid>
        </Grid>
      </FormControl>
    </div>
  );
};

Increment.propTypes = {
  data: PropTypes.shape({
    optionTitle: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    minVol: PropTypes.number,
    _id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    optionActive: PropTypes.bool.isRequired,
    selector: PropTypes.arrayOf(PropTypes.string),
  }),
  addItemHandler: PropTypes.func.isRequired,
};

export default Increment;
