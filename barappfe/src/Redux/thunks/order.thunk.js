import { confirmOrderInProcess, confirmOrderSuccess } from '../actions/order.action';

export const sendOrder = () => async (dispatch, getState) => {
    dispatch(confirmOrderInProcess())

    dispatch(confirmOrderSuccess(getState.order))
};