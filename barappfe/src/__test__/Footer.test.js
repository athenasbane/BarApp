import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { Footer } from '../components/UI/Footer/Footer';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore();
const store = mockStore();

describe('Footer Tests', () => {
    test('renders correctly', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <Footer />
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
}); 