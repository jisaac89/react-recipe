import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class BaseLayout extends React.Component<any, any>{

    render() {
        return (
            <div>
                Base Layout
                <div>{this.props.children}</div>
            </div>
        )
    }
}