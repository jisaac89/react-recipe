import * as React from 'react';
import { Provider } from 'mobx-react';
import { initAppStore, getAuthStore } from '../stores/_GlobalStore';

export default function initializePage(UI) {

  return class PageComponent extends React.Component {

    appStore: any;
    authStore: any;

    static getInitialProps({ req }) {
      const isServer = !!req;
      const store = initAppStore(isServer);
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
          <UI />
        </Provider>
      )
    }
  }
}