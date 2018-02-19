import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Default } from '../components/layouts/_Layouts';
import initializePage from '../utils/initialize';
import Link from 'next/link';
import { Emerge, Toolbar, Button } from '../utils/recoilClient';

@inject('appStore')
@observer
class Index extends React.Component {

  render() {
    return (
      <Default centerContent={true}>
        <Emerge>
          <h1 className="super text-center mb10">Welcome to <strong>React Recipe</strong></h1>
          <Toolbar spacing>
            <Link href={'/about'}><Button>About</Button></Link>
          </Toolbar>
        </Emerge>
      </Default>
    )
  }
}

export default initializePage(Index);