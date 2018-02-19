import * as React from 'react';
import { Provider } from 'mobx-react';
import { initAppStore, getAuthStore } from '../stores/_GlobalStore';

import "../recoil/src/index.less";
import "../less/main.less";
import Recoil from '../recoil/src/components/Recoil/Recoil';

import { IAppStore } from '../_interfaces/stores/IAppStore';
import { IAuthStore } from '../_interfaces/stores/IAuthStore';

interface IPageComponent { };

export default function initializePage(UI) {

  return class PageComponent extends React.Component<IPageComponent, any> {

    appStore: IAppStore;
    authStore: IAuthStore;

    static getInitialProps({ req }) {
      const isServer = !!req;
      // const store = initAppStore(isServer);
      return { isServer }
    }

    constructor(props) {
      super(props);
      this.appStore = initAppStore(props.isServer);
      this.authStore = getAuthStore();
    }

    render() {

      const stores = {
        appStore: this.appStore,
        authStore: this.authStore
      }

      return (
        <Provider {...stores}>
          <Recoil className="e-fill">
            <UI />
          </Recoil>
        </Provider>
      )
    }
  }
}