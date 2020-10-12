import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Menu from '../components/Menu/Menu';

describe('Menu Tests', () => {
    test('renders correctly', () => {
        const tree = renderer
            .create(<Menu />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
}); 