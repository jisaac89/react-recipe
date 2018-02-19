import * as React from 'react';
import { observer } from 'mobx-react';

import { Layer } from '../../utils/recoilClient';
import Header from '../navigation/Header';

import { IDefault } from '../../_interfaces/components/layouts/IDefault';

@observer
export default class Default extends React.Component<IDefault>{
    render() {
        return (
            <Layer fill>
                <Header />
                {this.props.children}
            </Layer>
        );
    }
}