import {
  confirmOrderFailure,
  confirmOrderInProcess,
  confirmOrderSuccess,
} from '../actions/order.action';
import { url } from '../../constants';

export const sendOrder = (order) => async (dispatch, getState) => {
  dispatch(confirmOrderInProcess());
  console.log(JSON.stringify({ order }));
  try {
    await fetch(`${url}/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ order }),
    });

    dispatch(confirmOrderSuccess());
  } catch (e) {
    console.log(order);
    dispatch(confirmOrderFailure());
  }
};
