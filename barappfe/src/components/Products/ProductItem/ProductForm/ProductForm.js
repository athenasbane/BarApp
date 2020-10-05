import React from 'react';
import DropDown from '../../../Inputs/DropDown/DropDown';
import Increment from '../../../Inputs/Increment/Increment';
import { connect }from 'react-redux';
import { addProductToOrder } from '../../../../Redux/actions/order.action';
import { loadOptions } from '../../../../Redux/thunks/option.thunk';

const ProductForm = ({options, addToOrder, getOptions, handleChange, title, id}) => {
    const addItemHandler = (subOption, volume, price, optionId) => {
        const order = {
            title,
            optionId, 
            subOption,  
            volume,
            price
        };
        addToOrder(order);
        handleChange();
    };

    const inputOptions = options.filter(el => el.product === id);

    React.useEffect(() => {
        getOptions(id)
    }, [getOptions, id])

    const menu = (inputOptions.map(option => {
        switch(option.type) {
            case 'increment':
                return <Increment key={option._id} data={option} addItemHandler={addItemHandler} />
            case 'dropdown':
                return <DropDown key={option._id} data={option} addItemHandler={addItemHandler} />
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

const mapStateToProps = state => ({
    options: state.option.optionData 
});

const mapDispatchToProps = dispatch => ({
    addToOrder: order => dispatch(addProductToOrder(order)),
    getOptions: id => dispatch(loadOptions(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);