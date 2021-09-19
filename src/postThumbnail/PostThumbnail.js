import React, {useCallback} from 'react';
import classes from './postThumbNail.scss';
import {push} from 'connected-react-router';
import {useDispatch} from 'react-redux';

const PostThumbnail  = (props) => {
    const dispatch = useDispatch();
    const {id, title, body} = props;
    const onClickHandler = useCallback(() => dispatch(push(`/posts/${id}`)), [dispatch, id]);

    return (
        <div className={classes.container} onClick={onClickHandler}>
            <h5>{title}</h5>
            <h6 className={classes.muted}>{body}</h6>
        </div>
    );
}

export {PostThumbnail};
export default PostThumbnail;
