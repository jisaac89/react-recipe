import React from 'react'
import { observer, inject } from 'mobx-react';
import Router from 'next/router';
import authorize from '../../utils/auth';
import mobXHOC from '../../components/hocs/mobXHOC';

@inject('authStore', 'appStore')
@observer
class logOut extends React.Component<any, any> {
  componentDidMount() {
    authorize().unsetTokens();
    this.props.authStore.logOut().then(() => {
      Router.push('/')
    });
  }
  render() {
    return null
  }
};


export default mobXHOC(logOut);
