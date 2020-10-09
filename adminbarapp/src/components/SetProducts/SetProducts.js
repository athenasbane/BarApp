import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { loadProducts, saveProduct, removeProduct } from '../../Redux/thunks/products.thunk';
import { updateProduct } from '../../Redux/actions/product.action';

import ProductItem from './ProductItem/ProductItem';
import SetProductAddNew from './SetProductAddNew/SetProductAddNew';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const SetProducts = ({
  products,
  getProducts,
  setRemoveProduct,
  setUpdateProduct,
  setSaveProduct,
}) => {
  const classes = useStyles();

  React.useEffect(() => {
    getProducts();
  }, [getProducts]);

  const productList = products.map((product, index) => (
    <ProductItem
      handleChange={setUpdateProduct}
      removeProduct={setRemoveProduct}
      saveProduct={setSaveProduct}
      key={product._id}
      id={product._id}
      product={product}
      productIndex={index}
    />
  ));

  return (
    <div className={classes.root}>
      <SetProductAddNew />
      {productList}
    </div>
  );
};

SetProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  getProducts: PropTypes.func.isRequired,
  setRemoveProduct: PropTypes.func.isRequired,
  setUpdateProduct: PropTypes.func.isRequired,
  setSaveProduct: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.products.productData,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(loadProducts()),
  setRemoveProduct: (id) => dispatch(removeProduct(id)),
  setUpdateProduct: (product) => dispatch(updateProduct(product)),
  setSaveProduct: (product) => dispatch(saveProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SetProducts);
