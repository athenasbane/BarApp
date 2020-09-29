import { 
    loadProductsFailure, 
    loadProductsInProgress, 
    loadProductsSuccess } from '../actions/product.action';

export const loadProducts = () => async (dispatch, getState) => {
    
    dispatch(loadProductsInProgress());

    // ADD ASYNC FROM BACKEND
    const products = [{
        title: 'Strongbow',
        category: 'drinks',
        subCategory: 'cider',
        active: true,
        inputOptions: 
            [{
                type: 'increment',
                title: 'Pint',
                minVol: 0,
                price: 4.0,
                active: true
            },
            {
                type: 'increment',
                title: 'Half-Pint',
                minVol: 0,
                price: 2.0,
                active: true
            }]
        
    }, {
        title: 'Fish & Chips',
        category: 'food',
        subCategory: 'mains',
        active: true,
        inputOptions: [{
                type: 'increment',
                title: 'Medium',
                minVol: 0,
                price: 8.0,
                active: true
            },
            {
                type: 'increment',
                title: 'Large',
                minVol: 0,
                price: 12.0,
                active: false
            }]
    }, {
        title: 'Pizza',
        category: 'food',
        subCategory: 'mains',
        active: true,
        inputOptions: [
            {
                type: 'dropdown',
                title: 'Medium',
                minVol: 0,
                price: 10.0,
                selectors: ['Peas', 'Cheese'],
                active: false
            },
            {
                type: 'increment',
                title: 'Large',
                minVol: 0,
                price: 14.0,
                active: true
            }
        ]
    }]

    dispatch(loadProductsSuccess(products));
    
};
