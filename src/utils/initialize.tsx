import * as React from 'react';
import { Provider } from 'mobx-react';
import { initAppStore } from '../stores/_GlobalStore';

import "../recoil/src/index.less";
import "../less/main.less";

import { IAppStore } from '../_interfaces/stores/IAppStore';

interface IPageComponent { };

export default function initializePage(UI) {

  return class PageComponent extends React.Component<IPageComponent> {

    appStore: IAppStore;

    static getInitialProps({ req }) {
      const isServer = !!req;
      const appStoreDefaults = initAppStore(isServer);
      return { appStoreDefaults, isServer }
    }

    constructor(props) {
      super(props);
      this.appStore = initAppStore(props.isServer, props.appStoreDefaults);
    }

    render() {

      const stores = {
        appStore: this.appStore
      }

      return (
        <Provider {...stores}>
          <UI />
        </Provider>
      )
    }
  }
}