import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import classes from './postDetails.scss';
import {push} from 'connected-react-router';
import User from '../user/User';
import {Link, useParams} from 'react-router-dom';

const PostDetails  = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    const usersMap = useSelector((state) => state.users.users);
    const [post, setPost] = useState({});
    let { postId } = useParams();
    useEffect(() => {
        if(!posts?.length) {
            dispatch(push('/'));
        }
    }, [dispatch, posts]);
    
    useEffect(() => {
        setPost(posts.find((p) => p.id.toString() === postId.toString()));
    }, [postId, setPost, posts]);
    
    console.info({postId});
    if (!post?.id) return <div>loading</div>;
    const {title, body} = post;
    
    return (
        <div className={classes.container}>
            <Link to={'/'} className={classes.backLink}>&lt;&lt;&nbsp;Back</Link>
            <h5>{title}</h5>
            <h6 className={classes.muted}>{body}</h6>
            <User user={usersMap[post.userId]}/>
        </div>
    );
}

export {PostDetails};
export default PostDetails;
