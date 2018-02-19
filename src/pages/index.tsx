import * as React from 'react';
import { inject, observer } from 'mobx-react';
import BaseLayout from '../components/layout/BaseLayout';
import initializePage from '../utils/initialize';

import { Emerge, Layer, Toolbar, Button } from '../utils/recoilClient';

@inject('authStore')
@observer
class Index extends React.Component<any, any>{

  render() {
    return (
      <BaseLayout>
        <Layer fill flexCenter>
          <Emerge if={true}>
            <h1 className="super text-center">Welcome to React Recipe</h1>
            <Toolbar spacing>
              <Button simple>Typescript</Button>
              <Button simple>Next</Button>
              <Button simple>MobX</Button>
              <Button simple>Express</Button>
              <Button simple>Recoil</Button>
            </Toolbar>
          </Emerge>
        </Layer>
      </BaseLayout>
    )
  }
}

export default initializePage(Index);