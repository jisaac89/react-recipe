import * as React from 'react';
import { observer, inject } from 'mobx-react';
import Router from 'next/router';
import { SlideIn, Layer, Emerge, Button, Toolbar } from '../../utils/recoilClient';
import Link from 'next/link';

@inject('appStore', 'authStore')
@observer
export default class MenuPane extends React.Component<any, any>{
    componentDidMount() {
        if (Router.pathname === '/') {
            this.props.appStore.is_menuEnabled = true;
        }
    }
    toggleMenu() {
        this.props.appStore.toggleMenu();
    }
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

                        <Toolbar vertical spacing className="mt20 w300px">
                            {Router.pathname !== '/' ? <Button block onClick={this.toggleMenu.bind(this)}>Toggle Menu</Button> : null}
                            <Link prefetch href={'/about'}><Button block>About</Button></Link>
                            <Button block href="/auth/logOut">Sign Out</Button>
                        </Toolbar>
                    </Emerge>
                </Layer>
            </SlideIn>
        )
    }
}