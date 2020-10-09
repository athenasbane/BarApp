import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Typography, Button, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import ProductItemOption from './ProductItemOption/ProductItemOption';
import ProductItemLeft from './ProductItemLeft';
import { loadOptions, saveNewOption } from '../../../Redux/thunks/option.thunk';
import ProductItemNewOption from './ProductItemOption/ProductItemNewOption';

const useStyles = makeStyles({
  bordered: {
    border: '1px solid black',
  },
});

const ProductItem = ({
  id,
  getOptions,
  saveNewOption,
  options,
  product,
  saveProduct,
  removeProduct,
  handleChange,
  productIndex,
}) => {
  const classes = useStyles();
  const [optionOpen, setOptionOpen] = React.useState(false);
  const [newOptionData, setNewOptionData] = React.useState({
    optionTitle: '',
    type: 'increment',
    minVol: 0,
    price: 1,
    selector: [],
    optionActive: false,
  });

  React.useEffect(() => {
    if (id) {
      getOptions(id);
    }
  }, [getOptions, id]);

  const handleChangeItem = (event) => {
    event.persist();
    if (event.target.name === 'selector') {
      console.log('here');
      return setNewOptionData((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value.split(', '),
      }));
    }
    if (event.target.name === 'optionActive') {
      console.log(event.target.checked);
      return setNewOptionData((prevState) => ({
        ...prevState,
        optionActive: event.target.checked,
      }));
    }
    setNewOptionData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleNewOptionSave = (id, option) => {
    saveNewOption(id, option);
    setNewOptionData({
      optionTitle: '',
      type: 'increment',
      minVol: 0,
      price: 1,
      selector: [],
      optionActive: false,
    });
    setOptionOpen(!optionOpen);
  };

  const optionsFilter = options.filter((el) => el.product === id);

  const optionsList = optionsFilter.map((option, index) => (
    <ProductItemOption key={option._id} index={index} option={option} handleChange={handleChange} />
  ));
  return (
    <Paper elevation={3} variant="outlined" square>
      <Grid justify="center" container item xs={12}>
        <Typography>{product.title}</Typography>
      </Grid>
      <Grid container direction="row">
        <Grid item xs={4}>
          <ProductItemLeft
            saveProduct={saveProduct}
            removeProduct={removeProduct}
            handleChange={handleChange}
            product={product}
            productIndex={productIndex}
          />
        </Grid>
        <Grid container item direction="column" xs={8}>
          <Grid className={classes.bordered} item>
            {optionsList}
          </Grid>
          <Grid item>
            <Button
              disabled={!product._id}
              onClick={() => setOptionOpen(!optionOpen)}
              variant="contained"
            >
              Add New Option
            </Button>
            {optionOpen ? (
              <ProductItemNewOption
                option={newOptionData}
                changeHandler={handleChangeItem}
                handleCancel={() => setOptionOpen(!optionOpen)}
                handleSave={() => handleNewOptionSave(product._id, newOptionData)}
              />
            ) : null}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  getOptions: PropTypes.func.isRequired,
  saveNewOption: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  product: PropTypes.object.isRequired,
  saveProduct: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  productIndex: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  options: state.option.optionData,
});

const mapDispatchToProps = (dispatch) => ({
  getOptions: (id) => dispatch(loadOptions(id)),
  saveNewOption: (id, option) => dispatch(saveNewOption(id, option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
