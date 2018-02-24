import React from 'react'
import { observer, inject } from 'mobx-react';
import Router from 'next/router'
import mobXHOC from '../../components/hocs/mobXHOC';

import inita from '../../utils/auth';

@inject('authStore', 'appStore')
@observer
class LoggedIn extends React.Component<any> {

  componentDidMount() {
    const { authStore, appStore } = this.props;

    let auth = inita();

    auth.setAccessToken();
    auth.setIdToken();

    auth.isLoggedInUser((user) => {
      authStore.login(user);
      Router.push('/');
    }, () => {
      appStore.loading = false;
    });

  }

  render() {
    return null
  }

};

export default mobXHOC(LoggedIn);