import * as React from 'react';
import { observer } from 'mobx-react';
import { Layer } from '../../utils/recoilClient';
import Header from '../navigation/Header';
import { IDefaultProps } from '../../_interfaces/components/layouts/IDefaultProps';

import { baseLayout } from '../hocs/baseLayout';

@observer
class Default extends React.Component<IDefaultProps>{
    render() {
        let { centerContent } = this.props;
        return (
            <Layer fill flex>
                <Header />
                <Layer fill flexCenter={centerContent}>
                    {this.props.children}
                </Layer>
            </Layer>
        );
    }
}

// every layout must extend base!
export default baseLayout()(Default);