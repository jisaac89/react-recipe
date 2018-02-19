import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Default } from '../components/layouts/_Layouts'; 
import initializePage from '../utils/initialize';

import { Emerge, Layer, Toolbar, Button } from '../utils/recoilClient';

@inject('appStore')
@observer
class Index extends React.Component {

  render() {
    return (
      <Default>
        <Layer fill flexCenter>
          <Emerge>
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
      </Default>            
    )
  }
}

export default initializePage(Index);