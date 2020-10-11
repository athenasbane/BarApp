import React from 'react';
import { shallow } from 'enzyme';
import renderer, { act } from 'react-test-renderer';
import Canvas, {getData} from '../components/Canvas/Canvas';
import { render, fireEvent, getByTestId, screen } from '@testing-library/react';

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve([
        {
            orderData: [

            ],
            tableNum: 5,
            delivered: false,
            _id: 5654667
        }
    ])
}));

describe('Canvas', () => {
    test('snapshot renders', () => {
        const component = renderer.create(<Canvas />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('getData', () => {
        it('gets the data', async() => {
            await act(() => render(<Canvas />));
            const { container } = render(<Canvas />)
            expect(screen.getBy())
        })
    })
});