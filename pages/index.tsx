import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Default } from '../components/layouts/_Layouts';
import mobXHOC from '../components/hocs/mobXHOC';
import Link from 'next/link';
import { Emerge, Button } from '../utils/recoilClient';
import { IIndexProps } from '_interfaces/pages/IIndexProps';

@inject('appStore', 'authStore')
@observer
class Index extends React.Component<IIndexProps> {
  componentWillUnmount() {
    if (this.props.authStore.is_authenticated) {
      this.props.appStore.is_menuEnabled = true;
    }
  }
  render() {
    let actionsArray = [<Link key="about" prefetch href={'/about'}><Button block>About</Button></Link>];

    return (
      <Default centerContent={true} actions={actionsArray}>
        <Emerge>
          <h1 className="super text-center mb10">React<strong> Recipe</strong></h1>
        </Emerge>
      </Default>
    )
  }
}

export default mobXHOC(Index);