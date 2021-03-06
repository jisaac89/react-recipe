import React from 'react'
import { observer, inject } from 'mobx-react';
import Router from 'next/router'
import mobXHOC from '../../components/hocs/mobXHOC';

import authorize from '../../utils/auth';

@inject('authStore', 'appStore')
@observer
class LoggedIn extends React.Component<any> {

  componentDidMount() {
    const { authStore, appStore } = this.props;

    let auth = authorize();

    auth.setAccessToken();
    auth.setIdToken();
    auth.setUserProfile();

    auth.isLoggedInUser((user) => {
      authStore.login(user);
      appStore.toggleMenu();
      appStore.is_loading = false;
      Router.push('/');
    }, () => {
      appStore.is_loading = false;
    });

  }

  render() {
    return null
  }

};

export default mobXHOC(LoggedIn);