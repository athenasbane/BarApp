import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { shallow } from 'enzyme';
import { ProductForm } from '../components/Products/ProductItem/ProductForm/ProductForm';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore();
const store = mockStore();

describe('ProductForm Tests', () => {
    test('renders correctly', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <ProductForm 
                    addToOrder={() => {}} 
                    getOptions={() => {}} 
                    handleChange={() => {}} 
                    title="test title"/>
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });
}); 