import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Link from 'next/link';
import { Default } from '../components/layouts/_Layouts';
import mobXHOC from '../components/hocs/mobXHOC';
import { Emerge, Toolbar, Button } from '../utils/recoilClient';

@inject('appStore')
@observer
class Index extends React.Component {
  render() {

    let actionsArray = [<Link href={'/'}><Button block>Go Back</Button></Link>];

    return (
      <Default centerContent actions={actionsArray}>
        <Emerge>
          <h1 className="super text-center mb10">About</h1>
        </Emerge>
      </Default>
    )
  }
}

export default mobXHOC(Index);