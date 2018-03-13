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
        let { user, is_authenticated } = authStore;

        return (
            <Toolbar block className="border-bottom p10">
                {is_authenticated ? <Button simple right href="auth/logOut">Log out</Button> : <Button simple right href="/login">Login</Button>}
                <Button onClick={this.toggleNightMode.bind(this)} simple right icon="moon-o"></Button>
                {is_authenticated ?
                    <div className="profile-picture border-all mr10">
                        <img height="25" width="25" src={user.picture} />
                    </div> : null}
            </Toolbar>
        )
    }
}

{/* <Dropdown className="ml5" icon="user" right dropDirection="left"><LogIn /></Dropdown> */ }