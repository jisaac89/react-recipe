import * as React from 'react';
import { observer } from 'mobx-react';
import { Layer, Toolbar } from '../../utils/recoilClient';
import Header from '../navigation/Header';
import { IDefaultProps } from '../../_interfaces/components/layouts/IDefaultProps';

import { baseLayout } from '../hocs/baseLayout';

@observer
class Default extends React.Component<IDefaultProps, any>{
    public render() {
        let { centerContent, actions } = this.props;

        let actionListArray = [];

        let createActionsList = (action, index) => {
            actionListArray.push(action)
        }

        if (actions) {
            actions.map(createActionsList);
        }

        return (
            <Layer fill flex>
                <Header />
                <Layer fill flex>
                    <Layer fill flexCenter={centerContent}>
                        {this.props.children}
                    </Layer>
                    {actions ? (
                        <Toolbar textCenter flex block className="border-top p10">
                            {actionListArray}
                        </Toolbar>
                    ) : null}
                </Layer>
            </Layer>
        );
    }
}

// every layout must extend base!
export default baseLayout()(Default);