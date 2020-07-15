import React from 'react';
import { compose } from 'recompose';

import { AuthUserContext, withAuthorization, withEmailVerification } from '../Session';
import Messages from '../Messages';

const HomePage = () => (

  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Home Page for {authUser && authUser.username}</h1>
        <p>The Home Page is accessible by every signed in user.</p>

        <Messages authUser={authUser}/>
      </div>)}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePage);
