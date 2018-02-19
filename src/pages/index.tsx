import * as React from 'react';
import { inject, observer } from 'mobx-react';
import BaseLayout from '../components/layout/BaseLayout';
import initializePage from '../utils/initialize';

import Button from '../recoil/src/components/Button/Button';

@inject('authStore')
@observer
class Index extends React.Component<any, any>{

  constructor(props) {
    super(props)
    this.state = {
      authStore: props.authStore
    }
  }

  login() {
    this.state.authStore.signIn().then(() => {
      console.log('logged in!')
    });
  }

  render() {
    return (
      <BaseLayout>
        <Button theme="primary" onClick={this.login.bind(this)}>{this.state.authStore.isAuthenticated ? "Log out" : "Logs in"}</Button>
      </BaseLayout>
    )
  }
}

export default initializePage(Index);