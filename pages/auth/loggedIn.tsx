import React from 'react'
import { observer, inject } from 'mobx-react';
import Router from 'next/router'
import mobXHOC from '../../components/hocs/mobXHOC';

import { setToken, checkSecret, extractInfoFromHash, getUserFromLocalCookie } from '../../utils/auth';

@inject('authStore')
@observer
class LoggedIn extends React.Component<any> {

  componentDidMount() {
    const { authStore } = this.props;
    const { token, secret } = extractInfoFromHash();
    if (!checkSecret(secret) || !token) {
      console.error('Something happened with the Sign In request');
    }
    setToken(token);
    authStore.login(getUserFromLocalCookie());
    Router.push('/');
  }

  render() {
    return null
  }

};

export default mobXHOC(LoggedIn);