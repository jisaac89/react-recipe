import * as React from 'react';
import Link from 'next/link';
import { observer, inject } from 'mobx-react';
import { Button, Toolbar, Dropdown } from '../../utils/recoilClient';
import { IHeaderProps } from '../../_interfaces/components/navigation/IHeaderProps';

import LogIn from '../../components/navigation/LogIn';

@inject('appStore', 'authStore')
@observer
export default class Header extends React.Component<IHeaderProps, any>{

    toggleNightMode() {
        this.props.appStore.toggleNightMode();
    }

    render() {

        return (
            <Toolbar block className="border-bottom p10">
                {this.props.authStore.isAuthenticated ? <Button href="auth/logOut">Log out</Button> : <Dropdown className="ml5" icon="user" right dropDirection="left"><LogIn /></Dropdown>}
                <Button onClick={this.toggleNightMode.bind(this)} outline right icon="moon-o">Toggle Nightmode</Button>
            </Toolbar>
        )
    }
}