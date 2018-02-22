import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { SlideIn, Layer } from '../../utils/recoilClient';

@inject('appStore')
@observer
export default class MenuPane extends React.Component<any, any>{
    render() {
        let { appStore } = this.props;
        return (
            <SlideIn fill from="bottom" if={appStore.is_menuEnabled}>
                <Layer fill flexCenter theme="light">
                    Menu
                </Layer>
            </SlideIn>
        )
    }
}