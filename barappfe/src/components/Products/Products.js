import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductItem from './ProductItem/ProductItem';
import { loadProducts } from '../../Redux/thunks/products.thunk';

export const Products = ({ startLoadingProducts, products }) => {
  React.useEffect(() => {
    startLoadingProducts();
  }, [startLoadingProducts]);

  const menu = products.map((prod, index) => (
    <ProductItem
      key={prod._id}
      id={prod._id}
      index={index}
      title={prod.title}
      active={prod.active}
    />
  ));

  return <>{menu}</>;
};

Products.propTypes = {
  startLoadingProducts: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
  products: state.products.productData,
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingProducts: () => dispatch(loadProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);