import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import OrderDetails from '../components/Order/OrderDetails/OrderDetails';

const order = {
    createdAt: "2020-10-08T15:02:57.731Z",
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
    updatedAt: "2020-10-08T15:02:57.731Z",
    __v: 0,
    _id: "5f7f2a2112516b19cd01ef60",
};

describe('Order Details Tests', () => {
    it('renders correctly', () => {
        const tree = renderer
          .create(<OrderDetails order={order} />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });

    test('clicking Working On button calls event once', () => {
        const mockHandler = jest.fn();
        const component = render(
            <OrderDetails order={order} toggleColor={mockHandler} deliveredHandler={mockHandler} />
        );

        const workingOnButton = component.getByText('Working On');
        fireEvent.click(workingOnButton);

        expect(mockHandler.mock.calls).toHaveLength(1);

        const deliveredButton = component.getByText('Delivered');
        fireEvent.click(deliveredButton);

        expect(mockHandler.mock.calls).toHaveLength(2);
        
    })
})