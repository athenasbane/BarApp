import React from 'react';
import DropDown from '../../../Inputs/DropDown/DropDown';
import Increment from '../../../Inputs/Increment/Increment';
import { connect }from 'react-redux';
import { addProductToOrder } from '../../../../Redux/actions/order.action';

const ProductForm = (props) => {

    const addItemHandler = (subOption, volume, price) => {
        const order = {
            title: props.title,
            subOption,
            volume,
            price
        };
        props.addToOrder(order);
        props.handleChange()

    };

    const menu = (props.inputOptions.map(option => {
        switch(option.type) {
            case 'increment':
                return <Increment key={option.title} data={option} addItemHandler={addItemHandler} />
            case 'dropdown':
                return <DropDown key={option.title} data={option} addItemHandler={addItemHandler} />
            default:
                return null;
        }
    }));

    return (
        <div style={{width: '100%'}}>
            {menu}
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addToOrder: order => {
       dispatch(addProductToOrder(order))
    }
})

export default connect(undefined, mapDispatchToProps)(ProductForm);