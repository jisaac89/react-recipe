import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Link from 'next/link';
import { Default } from '../components/layouts/_Layouts';
import initializePage from '../utils/initialize';
import { Emerge, Toolbar, Button } from '../utils/recoilClient';

@inject('appStore')
@observer
class Index extends React.Component {

  render() {
    return (
      <Default centerContent>
        <Emerge>
          <h1 className="super text-center mb10">About</h1>
          <Toolbar spacing>
            <Link href={'/'}><Button>Go Back</Button></Link>
          </Toolbar>
        </Emerge>
      </Default>
    )
  }
}

export default initializePage(Index);