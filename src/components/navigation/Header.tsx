import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Button, Toolbar } from '../../utils/recoilClient';
import { IHeaderProps } from '../../_interfaces/components/navigation/IHeaderProps';
import Link from 'next/link';

@inject('appStore', 'authStore')
@observer
export default class Header extends React.Component<IHeaderProps, any>{

    constructor(props) {
        super(props);
        this.state = {
            appStore: props.appStore,
            authStore: props.authStore
        }
    }

    toggleNightMode() {
        this.state.appStore.toggleNightMode();
    }

    render() {
        return (
            <Toolbar block className="border-bottom p10">
                <Link><Button>Login</Button></Link>
                <Button onClick={this.toggleNightMode.bind(this)} outline right icon="moon-o">Toggle Nightmode</Button>
            </Toolbar>
        )
    }
}