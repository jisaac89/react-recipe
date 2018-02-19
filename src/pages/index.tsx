import * as React from 'react';
import { inject, observer } from 'mobx-react';
import BaseLayout from '../components/layout/BaseLayout';
import initializePage from '../utils/initialize';

import { Emerge } from '../recoil/src/index';

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
        <Emerge if={true}>
          <h1 className="super text-center pt20">Welcome to React Recipe</h1>
        </Emerge>
      </BaseLayout>
    )
  }
}

export default initializePage(Index);