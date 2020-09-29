import {
    getAuthedInProgress,
    getAuthedSuccess,
    getAuthedFailure,
    loginInProgress,
    loginSuccess,
    loginFailure
} from '../actions/login.action';

export const getAuthed = token => async (dispatch, getState) => {
    
    dispatch(getAuthedInProgress());
    
    try {
        let response = await fetch('http://localhost:4000/user/auth', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token })
        });
        let user = await response.json();

        dispatch(getAuthedSuccess(user));

    } catch (e) {
        dispatch(getAuthedFailure())
    }
};

export const login = formData => async (dispatch, getState) => {

    dispatch(loginInProgress())

    try {
        let response = await fetch('http://localhost:4000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ formData })
        });

        let user = await response.json();

        dispatch(loginSuccess(user));
        console.log(user)
        // localStorage.setItem('token', user.token)
    } catch (e) {
        console.log('Failed Login')
        dispatch(loginFailure());
    }
};