import React from 'react';
import { loadProducts, saveProduct } from '../../Redux/thunks/products.thunk';
import { updateProduct } from '../../Redux/actions/product.action';
import { makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { removeProduct } from '../../Redux/thunks/products.thunk';
import ProductItem from './ProductItem/ProductItem';
import SetProductAddNew from './SetProductAddNew/SetProductAddNew';

const useStyles = makeStyles({
    root: {
        width: '100%'
    }
});

const SetProducts = (props) => {
    const { products, getProducts } = props;
    const classes = useStyles();

    React.useEffect(() => {
        getProducts()
    }, [getProducts]);

    const productList = products.map((product, index) => { 
        return(<ProductItem 
        handleChange={props.setUpdateProduct}
        removeProduct={props.setRemoveProduct} 
        saveProduct={props.setSaveProduct}
        key={product._id}
        id={product._id} 
        product={product} 
        productIndex={index} />)
        
         }) 

    return (
        <div className={classes.root}>
            <SetProductAddNew />
            {productList}
        </div>
        );
    };

const mapStateToProps = state => ({
    products: state.products.productData,
    });
const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(loadProducts()),
    setRemoveProduct: id => dispatch(removeProduct(id)) ,
    setUpdateProduct: (product) => dispatch(updateProduct(product)),
    setSaveProduct: product => dispatch(saveProduct(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(SetProducts);