import React, {useEffect} from 'react'
import classes from './posts.scss';
import PostThumbnail from '../postThumbnail/PostThumbnail';
import {useDispatch, useSelector} from 'react-redux';
import clsx from 'clsx';
import {fetchPosts} from '../redux/post/postActions';
import {fetchUsers} from '../redux/user/userActions';

const Posts  = () => {
    const posts = useSelector((state) => state.posts.posts);
    const loading = useSelector((state) => state.posts.loading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
        dispatch(fetchUsers());
    }, [dispatch]);

    if (!posts?.length && !loading) return <div className={clsx(classes.container, classes.emptyContainer)}>No Posts found</div>;

    return (
        <div className={classes.container}>
            {posts.map(post => <PostThumbnail key={post.id} {...post}/>)}
        </div>
    );
}

export {Posts};
export default Posts;
