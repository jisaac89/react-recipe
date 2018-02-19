import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { Layer } from '../../utils/recoilClient';
import Header from '../navigation/Header';
import Recoil from '../../recoil/src/components/Recoil/Recoil';
import { IDefaultProps } from '../../_interfaces/components/layouts/IDefaultProps';

@inject('appStore')
@observer
export default class Default extends React.Component<IDefaultProps>{

    render() {
        let { centerContent, appStore } = this.props;

        return (
            <Recoil nightmode={appStore.nightmode} className="e-fill">
                <Layer fill flex>
                    <Header />
                    <Layer fill flexCenter={centerContent}>
                        {this.props.children}
                    </Layer>
                </Layer>
            </Recoil>
        );
    }
}