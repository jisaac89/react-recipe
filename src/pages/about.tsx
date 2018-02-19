import * as React from 'react';
import { inject, observer } from 'mobx-react';
import BaseLayout from '../components/layout/BaseLayout';
import initializePage from '../utils/initialize';

import { Emerge, Layer } from '../utils/recoilClient';

@inject('authStore')
@observer
class Index extends React.Component<any, any>{

  render() {
    return (
      <BaseLayout>
        <Layer fill flexCenter>
          <Emerge if={true}>
            <h1 className="super text-center pt20">About Us</h1>
          </Emerge>
        </Layer>
      </BaseLayout>
    )
  }
}

export default initializePage(Index);