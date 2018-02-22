import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Default } from '../components/layouts/_Layouts';
import mobXHOC from '../components/hocs/mobXHOC';
import Link from 'next/link';
import { Emerge, Toolbar, Button } from '../utils/recoilClient';
import { IIndexProps } from '_interfaces/pages/IIndexProps';

@inject('appStore')
@observer
class Index extends React.Component<IIndexProps> {
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

export default mobXHOC(Index);