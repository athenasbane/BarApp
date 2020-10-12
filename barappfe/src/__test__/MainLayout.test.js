import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { shallow } from 'enzyme';
import { MainLayout } from '../components/UI/Layout/MainLayout';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore();
const store = mockStore();

describe('MainLayout Tests', () => {
    test('renders correctly', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <MainLayout />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });
}); 