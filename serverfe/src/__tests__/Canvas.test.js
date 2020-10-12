import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Canvas from '../components/Canvas/Canvas';

describe('Canvas Tests', () => {
    test('renders correctly', () => {
        const tree = renderer
            .create(<Canvas />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
}) 