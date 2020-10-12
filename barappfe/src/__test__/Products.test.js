import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { shallow } from 'enzyme';
import { Products } from '../components/Products/Products';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore();
const store = mockStore();

describe('Product Tests', () => {
    test('renders correctly', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <Products startLoadingProducts={() => {}} />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });
}); 