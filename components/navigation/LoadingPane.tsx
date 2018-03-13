import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { SlideIn, Layer, Emerge, Loading } from '../../utils/recoilClient';

@inject('appStore')
@observer
export default class LoadingPane extends React.Component<any, any>{
    render() {
        let { appStore } = this.props;
        let { is_loading } = appStore;
        return (
            <SlideIn fill from="bottom" if={is_loading}>
                <Layer fill flexCenter theme="light">
                    <Emerge if={is_loading}>
                        <Loading if={true} size="xlarge" />
                    </Emerge>
                </Layer>
            </SlideIn>
        )
    }
}