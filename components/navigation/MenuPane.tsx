import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { SlideIn, Layer, Emerge } from '../../utils/recoilClient';

@inject('appStore', 'authStore')
@observer
export default class MenuPane extends React.Component<any, any>{
    render() {
        let { appStore, authStore } = this.props;
        let { is_menuEnabled } = appStore;
        let { user } = authStore;
        return (
            <SlideIn fill from="bottom" if={is_menuEnabled}>
                <Layer fill flexCenter theme="light">
                    <Emerge if={is_menuEnabled}>
                        <div className="profile-picture mb10"><img height="100" width="100" src={user.picture} /></div>
                        <h2>Weclome <strong>{user.name}</strong></h2>
                    </Emerge>
                </Layer>
            </SlideIn>
        )
    }
}