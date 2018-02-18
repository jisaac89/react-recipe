import * as React from 'react';

export default class BaseLayout extends React.Component<any, any>{

    render() {
        return (
            <div>
                <div>{this.props.children}</div>
            </div>
        )
    }
}