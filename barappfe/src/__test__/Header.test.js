import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import { Header } from '../components/UI/Header/Header';

describe('Body Tests', () => {
    test('renders correctly', () => {
        const tree = renderer
            .create(<Header />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
}); 