import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Body } from '../components/UI/Body/Body';
import { Provider } from 'react-redux';

const mockStore = configureStore();
const store = mockStore();

describe('Body Tests', () => {
    test('renders correctly', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <Body />
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
}); 