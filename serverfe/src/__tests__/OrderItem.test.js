import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import OrderItem from '../components/Order/OrderItem/OrderItem';

const item = {
    optionId: "5f6a3d7bf2723782c641bb35",
    subOption: "Half-Pint",
    title: "Strongbow",
    volume: 3,
    _id: "5f7f2a2112516b19cd01ef61",
};

describe('OrderItem Tests', () => {
    test('renders correctly', () => {
        const tree = renderer
            .create(<OrderItem item={item} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});