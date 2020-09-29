import React from 'react';
import {
    // Grid,
    Button
} from '@material-ui/core';
import ProductItem from '../ProductItem/ProductItem';
import { connect } from 'react-redux';
import { saveNewProduct } from '../../../Redux/thunks/products.thunk';


const SetProductAddNew = props => {
    const initalState = {
        title: '',
        category: '',
        subCategory: '',
        active: false
    };

    const [newProductData, setNewProductData] = React.useState(initalState);
    const [addProductOpen, setAddProductOpen] = React.useState(false);

    const handleChange = (change) => {
        if (change.name === 'selector') {
            return setNewProductData(prevState => ({
                ...prevState,
                [change.name]: change.value.split(', ')
            }));
        }
        
        setNewProductData(prevState => ({
            ...prevState,
            [change.name]: change.value
        }));
    };

    const saveProduct = () => {
        setNewProductData(initalState);
        setAddProductOpen(false);
        props.setSaveNewProduct(newProductData);
    };

    const removeProduct = () => {
        setNewProductData(initalState);
        setAddProductOpen(false);
    };

    const body = (addProductOpen ? (
        <div>
            <ProductItem 
                handleChange={handleChange}
                removeProduct={removeProduct} 
                saveProduct={saveProduct}
                product={newProductData} 
            />
            <Button onClick={removeProduct} 
                variant="contained" >Cancel</Button>
        </div>
    ) : <Button onClick={() => setAddProductOpen(!addProductOpen)} 
            variant="contained">Add New Product</Button>);
    return (
        <div>
            {body}
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    setSaveNewProduct: product => dispatch(saveNewProduct(product))
});

export default connect(undefined, mapDispatchToProps)(SetProductAddNew);