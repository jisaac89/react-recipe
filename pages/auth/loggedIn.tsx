import React from 'react'
import { observer, inject } from 'mobx-react';
import Router from 'next/router'
import mobXHOC from '../../components/hocs/mobXHOC';

import { setToken, checkSecret, extractInfoFromHash } from '../../utils/auth';

@inject('authStore')
@observer
class LoggedIn extends React.Component<any> {

  componentDidMount() {
    const { token, secret } = extractInfoFromHash();
    if (!checkSecret(secret) || !token) {
      console.error('Something happened with the Sign In request');
    }
    setToken(token);
    Router.push('/');
  }

  render() {
    return null
  }

};

export default mobXHOC(LoggedIn);