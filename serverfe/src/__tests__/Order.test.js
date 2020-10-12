import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Order, { timeSince } from '../components/Order/Order';


const order = {
        createdAt: new Date(Date.now()),
        delivered: false,
        orderedItems: [
            {
                optionId: "5f6a3d7bf2723782c641bb35",
                subOption: "Half-Pint",
                title: "Strongbow",
                volume: 3,
                _id: "5f7f2a2112516b19cd01ef61",
            }
        ],
        tableNumber: 1,
        totalPrice: 6,
        updatedAt: new Date(Date.now()),
        __v: 0,
        _id: "5f7f2a2112516b19cd01ef60",
    };

describe('Order Component Tests', () => {

    it('renders correctly', () => {
        const tree = renderer
          .create(<Order order={order} />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });

    test('timeSince function works correctly', () => {
        let time = timeSince(new Date(Date.now() - (1*60*60*1000)));
        expect(time).toBe('60 Minutes ago...')
        time = timeSince(new Date(Date.now() - (1*59*1000)));
        expect(time).toBe('59 Seconds ago...');
    })
});
