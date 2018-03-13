import * as React from 'react';
import { inject, observer } from 'mobx-react';

import { IAppStore } from '../../_interfaces/stores/IAppStore';
import { IAuthStore } from '../../_interfaces/stores/IAuthStore';
import { Recoil } from '../../utils/recoilClient';

import MenuPane from '../navigation/MenuPane';
import LoadingPane from '../navigation/LoadingPane';
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
                if (this.props.authStore.is_authenticated) {

                } else {
                    let auth = authorize();

                    // auth.setAccessToken();
                    // auth.setIdToken();
                    // auth.setUserProfile();

                    auth.isLoggedInUser((user) => {
                        this.props.authStore.login(user);
                        this.props.appStore.is_loading = false;
                    }, () => {
                        this.props.appStore.is_loading = false;
                    });
                }
            }

            checkIfUserLogIn() {

            }

            checkIfUserLoggedIn() {

            }

            render(): JSX.Element {
                const appStore = this.props.appStore;
                let { is_nightmode } = appStore;
                return (
                    <Recoil nightmode={is_nightmode}>
                        <Component {...this.props} {...this.state} />
                        <MenuPane />
                        <LoadingPane />
                    </Recoil>
                );
            }
        };

        return Base;
    };