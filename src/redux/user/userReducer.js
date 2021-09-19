import {FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS} from './userActions';

const initialState = {
    users: {},
    loading: false
};

const job = (state = initialState, action) => {
    let {type, payload} = action;
    switch (type) {
        case FETCH_USERS_REQUEST: {
            return {...state, loading: true};
        }
        case FETCH_USERS_FAILURE: {
            return {...state, loading: false};
        }
        case FETCH_USERS_SUCCESS: {
            const {users} = payload;
            const usersMap = {};
            users.forEach(user => {
                usersMap[user.id] = user;
            });
            return {...state, loading: false, users: usersMap};
        }
        default:
            return state;
    }
};

export default job;
