import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from '../../enzyme';

import Checkout from '../../components/Checkout/Checkout';

describe('<Checkout />', () => {
  it('should render snapshot', () => {
    const component = renderer.create(<Checkout />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
