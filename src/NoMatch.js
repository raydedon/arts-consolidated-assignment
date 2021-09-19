import {useEffect} from 'react'
import {push} from 'connected-react-router';
import {useDispatch} from 'react-redux';

const NoMatch = () => {
    const dispatch = useDispatch();
    useEffect(() => {
            dispatch(push('/'));
    }, [dispatch]);
    return null;
};

export {NoMatch};
export default NoMatch;
