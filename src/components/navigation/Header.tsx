import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Button, Toolbar } from '../../utils/recoilClient';
import { IHeaderProps } from '../../_interfaces/components/navigation/IHeaderProps';

@inject('appStore')
@observer
export default class Header extends React.Component<IHeaderProps, any>{

    constructor(props) {
        super(props);
        this.state = {
            appStore: props.appStore
        }
    }

    toggleNightMode() {
        this.state.appStore.toggleNightMode();
    }

    render() {
        return (
            <Toolbar block className="border-bottom p10">
                <Button onClick={this.toggleNightMode.bind(this)} outline right icon="moon-o">Toggle Nightmode</Button>
            </Toolbar>
        )
    }
}