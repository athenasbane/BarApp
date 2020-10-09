import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  Select,
  FormControlLabel,
  Switch,
  Button,
  makeStyles,
} from '@material-ui/core';
import { connect } from 'react-redux';
import ProductInput from './ProductInput';
import { updateOption } from '../../../../Redux/actions/option.action';
import { deleteOption, updateDBOption } from '../../../../Redux/thunks/option.thunk';

const useStyles = makeStyles({
  root: {
    marginBottom: '20px',
    paddingBottom: '15px',
    paddingTop: '15px',
    borderBottom: '2px solid black',
  },
  bordered: {
    borderBottom: '1px solid black',
    marginBottom: '5px',
  },
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

const ProductItemOption = ({ option, setRemoveOption, setUpdateDBOption, setUpdateOption }) => {
  const dropdownValues = option.selector ? option.selector.join(', ') : [];
  const dropdownChange = (event) => {
    const result = event.target.value.split(', ');
    console.log(result);
    setUpdateOption({
      name: event.target.name,
      value: event.target.value.split(', '),
      id: option._id,
    });
  };
  const classes = useStyles();
  return (
    <Grid className={classes.root} container direction="column">
      <Grid className={classes.center} item xs={12}>
        <Typography>{option.optionTitle}</Typography>
      </Grid>
      <ProductInput
        title="Title"
        name="optionTitle"
        value={option.optionTitle}
        changeHandler={(event) =>
          setUpdateOption({
            name: event.target.name,
            value: event.target.value,
            id: option._id,
          })
        }
        type="text"
      />
      <Grid className={classes.margin} container item direction="row">
        <Grid className={classes.center} item xs={6}>
          <Typography>Type:</Typography>
        </Grid>
        <Grid item xs={6}>
          <Select
            native
            value={option.type}
            name="type"
            onChange={(event) =>
              setUpdateOption({
                name: event.target.name,
                value: event.target.value,
                id: option._id,
              })
            }
          >
            <option value="increment">Increment</option>
            <option value="dropdown">DropDown</option>
          </Select>
        </Grid>
      </Grid>
      <ProductInput
        title="Minimum Volume:"
        name="minVol"
        value={option.minVol}
        changeHandler={(event) =>
          setUpdateOption({
            name: event.target.name,
            value: event.target.value,
            id: option._id,
          })
        }
        type="number"
      />
      <ProductInput
        title="Price"
        name="price"
        value={option.price}
        changeHandler={(event) =>
          setUpdateOption({
            name: event.target.name,
            value: event.target.value,
            id: option._id,
          })
        }
        type="number"
      />
      {option.type === 'dropdown' ? (
        <ProductInput
          title="Dropdown Options:"
          name="selector"
          label="Seporate with commas! 'Peas, Cheese, Jam'"
          value={dropdownValues}
          changeHandler={(event) => dropdownChange(event)}
          type="text"
        />
      ) : null}
      <Grid className={classes.margin} container item direction="row">
        <Grid className={classes.center} item xs={6}>
          <FormControlLabel
            control={
              <Switch
                checked={option.optionActive}
                onChange={(event) =>
                  setUpdateOption({
                    name: event.target.name,
                    value: event.target.checked,
                    id: option._id,
                  })
                }
                name="optionActive"
                color="primary"
              />
            }
            label="Active"
          />
        </Grid>
        <Grid item container xs={6}>
          <Grid item xs={6}>
            <Button onClick={() => setRemoveOption(option._id)} variant="contained">
              Delete
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button onClick={() => setUpdateDBOption(option)} variant="contained">
              Save
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

// setRemoveOption, setUpdateDBOption, setUpdateOption

ProductItemOption.propTypes = {
  option: PropTypes.shape({
    optionActive: PropTypes.bool.isRequired,
    selector: PropTypes.arrayOf(PropTypes.string).isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    optionTitle: PropTypes.string.isRequired,
    minVol: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
  }),
  setRemoveOption: PropTypes.func.isRequired,
  setUpdateDBOption: PropTypes.func.isRequired,
  setUpdateOption: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setUpdateOption: (option) => dispatch(updateOption(option)),
  setRemoveOption: (id) => dispatch(deleteOption(id)),
  setUpdateDBOption: (option) => dispatch(updateDBOption(option)),
});
export default connect(undefined, mapDispatchToProps)(ProductItemOption);
