import * as React from 'react';
import { Provider } from 'mobx-react';
import { initAppStore } from '../stores/_GlobalStore';

import "../recoil/src/index.less";
import "../less/main.less";
import Recoil from '../recoil/src/components/Recoil/Recoil';

import { IAppStore } from '../_interfaces/stores/IAppStore';

interface IPageComponent { };

export default function initializePage(UI) {

  return class PageComponent extends React.Component<IPageComponent> {

    appStore: IAppStore;

    static getInitialProps({ req }) {
      const isServer = !!req;
      return { isServer }
    }

    constructor(props) {
      super(props);
      this.appStore = initAppStore(props.isServer);
    }

    render() {

      const stores = {
        appStore: this.appStore
      }

      let { appStore } = stores;

      return (
        <Provider {...stores}>
          <Recoil nightmode={appStore.nightmode} className="e-fill">
            <UI />
          </Recoil>
        </Provider>
      )
    }
  }
}