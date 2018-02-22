import * as React from 'react';

import NotAuthorized from '../navigation/NotAuthorized';
import defaultPage from './mobXHOC';

const privateRouteHOC = Page => class PrivateRoute extends React.Component<any> {
  static getInitialProps(ctx) {
    return Page.getInitialProps && Page.getInitialProps(ctx)
  }
  render() {
    if (!this.props.isAuthenticated) {
      return <NotAuthorized />
    }
    return <Page {...this.props} />
  }
};

export default Page => defaultPage(privateRouteHOC(Page));