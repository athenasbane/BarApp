import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  Button,
  TextField,
  FormControlLabel,
  Switch,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: '10px',
    marginBottom: '10px',
    width: '100%',
    textAlign: 'center',
  },
  titleBox: {
    marginBottom: '10px',
  },
  bordered: {
    border: '1px solid black',
  },
  margins: {
    margin: '15px',
    textAlign: 'center',
    justifyContent: 'center',
  },
});

const ProductItemLeft = ({ product, handleChange, removeProduct, saveProduct }) => {
  const classes = useStyles();
  return (
    <>
      <Grid container direction="row">
        <Grid
          container
          item
          justify="center"
          justifycontent="center"
          alignItems="center"
          direction="column"
          xs={12}
        >
          <Grid item>
            <Typography>Title:</Typography>
            <TextField
              className={classes.root}
              required
              name="title"
              label="Required"
              variant="filled"
              value={product.title}
              onChange={(event) =>
                handleChange({
                  name: event.target.name,
                  value: event.target.value,
                  id: product._id,
                })
              }
            />
          </Grid>
          <Grid item>
            <Typography>Category:</Typography>
            <TextField
              className={classes.root}
              required
              name="category"
              label="Required"
              variant="filled"
              value={product.category}
              onChange={(event) =>
                handleChange({
                  name: event.target.name,
                  value: event.target.value,
                  id: product._id,
                })
              }
            />
          </Grid>
          <Grid item>
            <Typography>Sub-Category:</Typography>
            <TextField
              className={classes.root}
              required
              name="subCategory"
              label="Required"
              variant="filled"
              value={product.subCategory}
              onChange={(event) =>
                handleChange({
                  name: event.target.name,
                  value: event.target.value,
                  id: product._id,
                })
              }
            />
          </Grid>
          <Grid className={classes.margins} item>
            <FormControlLabel
              control={
                <Switch
                  checked={product.active}
                  onChange={(event) =>
                    handleChange({
                      name: event.target.name,
                      value: event.target.checked,
                      id: product._id,
                    })
                  }
                  name="active"
                  color="primary"
                />
              }
              label="Active"
            />
          </Grid>
          <Grid className={classes.margins} container item>
            <Button onClick={() => removeProduct(product._id)} variant="contained">
              Delete
            </Button>
          </Grid>
          <Grid className={classes.margins} container item>
            <Button onClick={() => saveProduct(product)} color="secondary" variant="contained">
              Save
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

ProductItemLeft.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    subCategory: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
  }),
  handleChange: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
  saveProduct: PropTypes.func.isRequired,
};

export default ProductItemLeft;
