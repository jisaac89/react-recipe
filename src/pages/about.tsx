import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Default } from '../components/layouts/_Layouts';
import initializePage from '../utils/initialize';
import { Emerge, Layer } from '../utils/recoilClient';

@inject('appStore')
@observer
class Index extends React.Component {

  render() {
    return (
      <Default>
        <Layer fill flexCenter>
          <Emerge>
            <h1 className="super text-center">About</h1>
          </Emerge>
        </Layer>
      </Default>
    )
  }
}

export default initializePage(Index);