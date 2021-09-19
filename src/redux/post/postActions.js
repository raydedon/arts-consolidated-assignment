export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const fetchPosts = () => {
    const fetchPostsRequest = () => ({
        type: FETCH_POSTS_REQUEST
    });
    
    const fetchPostsSuccess = (posts) => ({
        type: FETCH_POSTS_SUCCESS,
        payload: {posts}
    });
    
    const fetchPostsFailure = () => ({
        type: FETCH_POSTS_FAILURE
    });
    
    return dispatch => {
        dispatch(fetchPostsRequest());
        
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(
                r => r.json(),
                error => {
                    console.log('An error occurred.', error);
                    dispatch(fetchPostsFailure());
                })
            .then(r => dispatch(fetchPostsSuccess(r)));
    };
};
