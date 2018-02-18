import * as React from 'react';
import { inject, observer } from 'mobx-react';
import BaseLayout from '../components/layout/BaseLayout';
import initializePage from '../utils/initialize';

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
        <div>
          <button onClick={this.login.bind(this)}>{this.state.authStore.isAuthenticated ? "Log out" : "Logs in"}</button>
        </div>
      </BaseLayout>
    )
  }
}

export default initializePage(Index);