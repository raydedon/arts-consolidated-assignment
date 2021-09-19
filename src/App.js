import React from 'react';
import classes from './app.scss';
import {ConnectedRouter} from 'connected-react-router';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router';
import Posts from './posts/Posts';
import PostDetails from './postDetails/PostDetails';
import NoMatch from './NoMatch';
import configureStore, {history} from './store/configureStore.dev';

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div className={classes.container}>
                    <Switch>
                        <Route path="/posts/:postId">
                            <PostDetails/>
                        </Route>
                        <Route path="/">
                            <Posts/>
                        </Route>
                        <Route>
                            <NoMatch />
                        </Route>
                    </Switch>
                </div>
            </ConnectedRouter>
        </Provider>
    );
}

export default App;
