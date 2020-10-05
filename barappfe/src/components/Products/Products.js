import React from 'react';
import ProductItem from './ProductItem/ProductItem';
import { connect } from 'react-redux';
import { loadProducts } from '../../Redux/thunks/products.thunk';

const Products = ({startLoadingProducts, products, isLoading}) => {

    React.useEffect(() => {
        startLoadingProducts()
    }, [startLoadingProducts])

    const menu = products.map((prod, index) => (<ProductItem 
                                                key={prod._id}
                                                id={prod._id} 
                                                index={index} 
                                                title={prod.title} 
                                                active={prod.active}/>));                                

    return (
        <React.Fragment>
            {menu}
        </React.Fragment>    
    );
};

const mapStateToProps = state => ({
    products: state.products.productData,
    isLoading: state.products.isLoading
})

const mapDispatchToProps = dispatch => ({
    startLoadingProducts: () => dispatch(loadProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);