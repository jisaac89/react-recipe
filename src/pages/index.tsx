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
    console.log(this.state);
    this.state.authStore.signIn();
    console.log(this.state.authStore);
  }

  render() {
    return (
      <BaseLayout>
        <button onClick={this.login.bind(this)}>login</button>
      </BaseLayout>
    )
  }
}

export default initializePage(Index);