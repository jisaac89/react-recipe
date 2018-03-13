import * as React from 'react';
import { Provider } from 'mobx-react';
import { initAppStore, getAuthStore } from '../../stores/_GlobalStore';

import "../../recoil/src/index.less";
import "../../less/main.less";

import { IAppStore } from '../../_interfaces/stores/IAppStore';
import { IAuthStore } from '../../_interfaces/stores/IAuthStore';

interface IPageComponent { };

export default function mobXHOC(Layouts) {

  return class PageComponent extends React.Component<IPageComponent> {

    appStore: IAppStore;
    authStore: IAuthStore;
    auth: any;

    static getInitialProps(req, res) {
      const isServer = !!req;
      const appStoreDefaults = initAppStore(isServer);
      const authStoreDefaults = getAuthStore(isServer);
      return { appStoreDefaults, authStoreDefaults, isServer }
    }

    constructor(props) {
      super(props);
      this.appStore = initAppStore(props.isServer, props.appStoreDefaults);
      this.authStore = getAuthStore(props.isServer, props.authStoreDefaults);
    }

    render() {

      const stores = {
        appStore: this.appStore,
        authStore: this.authStore
      }

      return (
        <Provider {...stores}>
          <Layouts />
        </Provider>
      )
    }
  }
}