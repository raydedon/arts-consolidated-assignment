export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const fetchUsers = () => {
    const fetchUsersRequest = () => ({
        type: FETCH_USERS_REQUEST
    });
    
    const fetchUsersSuccess = (users) => ({
        type: FETCH_USERS_SUCCESS,
        payload: {users}
    });
    
    const fetchUsersFailure = () => ({
        type: FETCH_USERS_FAILURE
    });
    
    return dispatch => {
        dispatch(fetchUsersRequest());
        
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(
                r => r.json(),
                error => {
                    console.log('An error occurred.', error);
                    dispatch(fetchUsersFailure());
                })
            .then(r => dispatch(fetchUsersSuccess(r)));
    };
};
