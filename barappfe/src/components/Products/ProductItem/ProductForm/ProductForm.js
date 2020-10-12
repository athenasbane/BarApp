import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DropDown from '../../../Inputs/DropDown/DropDown';
import Increment from '../../../Inputs/Increment/Increment';
import { addProductToOrder } from '../../../../Redux/actions/order.action';
import { loadOptions } from '../../../../Redux/thunks/option.thunk';

export const ProductForm = ({ options, addToOrder, getOptions, handleChange, title, id }) => {
  const addItemHandler = (subOption, volume, price, optionId) => {
    const order = {
      title,
      optionId,
      subOption,
      volume,
      price,
    };
    addToOrder(order);
    handleChange();
  };

  const inputOptions = options.filter((el) => el.product === id);

  React.useEffect(() => {
    getOptions(id);
  }, [getOptions, id]);

  const menu = inputOptions.map((option) => {
    switch (option.type) {
      case 'increment':
        return <Increment key={option._id} data={option} addItemHandler={addItemHandler} />;
      case 'dropdown':
        return <DropDown key={option._id} data={option} addItemHandler={addItemHandler} />;
      default:
        return null;
    }
  });

  return <div style={{ width: '100%' }}>{menu}</div>;
};

ProductForm.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  addToOrder: PropTypes.func.isRequired,
  getOptions: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const mapStateToProps = (state) => ({
  options: state.option.optionData,
});

const mapDispatchToProps = (dispatch) => ({
  addToOrder: (order) => dispatch(addProductToOrder(order)),
  getOptions: (id) => dispatch(loadOptions(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
