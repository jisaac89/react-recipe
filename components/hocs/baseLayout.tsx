import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Router from 'next/router';

import { IAppStore } from '../../_interfaces/stores/IAppStore';
import { IAuthStore } from '../../_interfaces/stores/IAuthStore';
import { Recoil } from '../../utils/recoilClient';

import MenuPane from '../navigation/MenuPane';

import authorize from '../../utils/auth';

// const Auth = dynamic(import('../../utils/auth'), defaults);


interface ExternalProps {
    appStore?: IAppStore;
    authStore?: IAuthStore;
}

interface State { }

export interface InjectedProps { }

export const baseLayout = () =>
    <TOriginalProps extends {}>(
        Component: (React.ComponentClass<TOriginalProps & InjectedProps>
            | React.StatelessComponent<TOriginalProps & InjectedProps>)
    ) => {
        type ResultProps = TOriginalProps & ExternalProps;

        @inject('appStore', 'authStore')
        @observer
        class Base extends React.Component<ResultProps, State> {

            constructor(props: ResultProps) {
                super(props);
            }

            componentDidMount() {
                this.checkIfUserLoggedIn();
            }

            checkIfUserLoggedIn() {
                let context = this;
                let { appStore, authStore } = context.props;

                let auth = authorize();

                appStore.loading = true;

                auth.getAccessToken();
                auth.getIdToken();

                auth.isLoggedInUser((user) => {
                    authStore.login(user);
                    // should push to a router store with initial location set;
                    // Router.push('/');
                }, () => {
                    appStore.loading = false;
                })
            }

            render(): JSX.Element {
                return (
                    <Recoil nightmode={this.props.appStore.is_nightmode}>
                        <Component {...this.props} {...this.state} />
                        <MenuPane />
                    </Recoil>
                );
            }
        };

        return Base;
    };