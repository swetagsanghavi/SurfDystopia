import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import HomeContainer from './home/home_container';
const Root = ({ store }) => {

const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      hashHistory.push('/login');
    }
  };

const _redirectIfLoggedIn = (nextState, replace) => {
  const currentUser = store.getState().session.currentUser;
  if (currentUser) {
    hashHistory.push('/');
  }
};


return (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={HomeContainer} />
        // <Route path="/login" component={SessionFormContainer} />
        // <Route path="/signup" component={SessionFormContainer} />
      </Route>
    </Router>
  </Provider>
);
};
export default Root;