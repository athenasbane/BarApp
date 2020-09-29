import {
    loadOptionsFailure,
    loadOptionsSuccess,
    loadOptionsInProgress,
    saveOptionInProgress,
    saveOptionFailure,
    saveOptionSuccess, 
    deleteOptionInProgress, 
    deleteOptionSuccess, 
    deleteOptionFailure, saveUpdatedOptionInProgress
} from '../actions/option.action';


export const loadOptions = id => async (dispatch, getState) => {
    dispatch(loadOptionsInProgress())
    
    try {
        let url = `http://localhost:4000/menu/${id}/option`
        let response = await fetch(url);
        let data = await response.json();

        dispatch(loadOptionsSuccess(data));
    } catch (e) {
        console.log(e)
        dispatch(loadOptionsFailure())
    }
};

export const updateDBOption = option => async (dispatch, getState) => {
    dispatch(saveUpdatedOptionInProgress())
    console.log(option)
    try {
        await fetch(`http://localhost:4000/menu/option/${option._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${getState().login.token}`,
            },
            body: JSON.stringify({option})

        })
    } catch (e) {

    }
}

export const saveNewOption = (id, option) => async (dispatch, getState) => {
    dispatch(saveOptionInProgress());

    try {
        let url = `http://localhost:4000/menu/option/${id}`;
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${getState().login.token}`,
            },
            body: JSON.stringify({option})
        });
        let data = await response.json();
        
        dispatch(saveOptionSuccess(data));
    } catch (e) {
        dispatch(saveOptionFailure());
    }
};

export const deleteOption = id => async (dispatch, getState) => {
    dispatch(deleteOptionInProgress())

    try {
        await fetch(`http://localhost:4000/menu/option/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${getState().login.token}`,
            },
        });

        dispatch(deleteOptionSuccess(id))

    } catch (e) {
        dispatch(deleteOptionFailure())
    }
};


