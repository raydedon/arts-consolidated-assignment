import {FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS} from './postActions';

const initialState = {
    posts: [],
    loading: false
};

const job = (state = initialState, action) => {
    let {type, payload} = action;
    switch (type) {
        case FETCH_POSTS_REQUEST: {
            return {...state, loading: true};
        }
        case FETCH_POSTS_FAILURE: {
            return {...state, loading: false};
        }
        case FETCH_POSTS_SUCCESS: {
            const {posts} = payload;
            return {...state, loading: false, posts};
        }
        default:
            return state;
    }
};

export default job;
