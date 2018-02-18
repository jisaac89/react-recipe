import * as React from 'react';

export default class BaseLayout extends React.Component<any, any>{
    render() {
        return this.props.children;
    }
}