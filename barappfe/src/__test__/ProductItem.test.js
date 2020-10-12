import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { ProductItem } from '../components/Products/ProductItem/ProductItem';

const mockStore = configureStore();
const store = mockStore();

describe('Menu Tests', () => {
    test('renders correctly', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <ProductItem title="test title" index={1} active={true}/>
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
}); 