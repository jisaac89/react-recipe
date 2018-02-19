import * as React from 'react';

export default class Base extends React.Component<any, any>{
    render() {
        return this.props.children;
    }
}