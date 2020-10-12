import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { shallow } from 'enzyme';
import { SubMenu } from '../components/SubMenu/SubMenu';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore();
const store = mockStore();

describe('SubMenu Tests', () => {
    test('renders correctly', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <SubMenu />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });
}); 