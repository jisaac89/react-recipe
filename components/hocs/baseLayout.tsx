import * as React from 'react';
import { inject, observer } from 'mobx-react';

import { IAppStore } from '../../_interfaces/stores/IAppStore';
import { Recoil } from '../../utils/recoilClient';

import MenuPane from '../navigation/MenuPane';

interface ExternalProps {
    appStore?: IAppStore;
}

interface State { }

export interface InjectedProps { }

export const baseLayout = () =>
    <TOriginalProps extends {}>(
        Component: (React.ComponentClass<TOriginalProps & InjectedProps>
            | React.StatelessComponent<TOriginalProps & InjectedProps>)
    ) => {
        type ResultProps = TOriginalProps & ExternalProps;

        @inject('appStore')
        @observer
        class Base extends React.Component<ResultProps, State> {

            constructor(props: ResultProps) {
                super(props);
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