import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Button, Toolbar } from '../../utils/recoilClient';
import { IHeaderProps } from '../../_interfaces/components/navigation/IHeaderProps';

@inject('appStore', 'authStore')
@observer
export default class Header extends React.Component<IHeaderProps, any>{

    toggleNightMode() {
        this.props.appStore.toggleNightMode();
    }

    render() {
        let { authStore } = this.props;
        let { user, is_Authenticated } = authStore;

        return (
            <Toolbar block className="border-bottom p10">
                {is_Authenticated ? <Button href="auth/logOut">Log out</Button> : <Button href="/login">Login</Button>}
                {is_Authenticated ? <div className="profile-picture pull-right ml10"><img height="30" width="30" src={user.picture} /></div> : null}
                <Button onClick={this.toggleNightMode.bind(this)} outline right icon="moon-o">Toggle Nightmode</Button>
            </Toolbar>
        )
    }
}

{/* <Dropdown className="ml5" icon="user" right dropDirection="left"><LogIn /></Dropdown> */ }