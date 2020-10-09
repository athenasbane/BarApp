import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from '../../enzyme';

import Footer from '../../components/UI/Footer/Footer';

describe('<Footer /> tests', () => {
  it('should render checkout component', () => {
    const wrapper = shallow(<Footer />);
    const Checkout = wrapper.find('Checkout');
    console.log(Checkout);
  });
});
