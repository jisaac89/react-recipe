import * as React from 'react';
import { observer, inject } from 'mobx-react';
import Link from 'next/link';
import { Button, Toolbar } from '../../utils/recoilClient';
import { IHeaderProps } from '../../_interfaces/components/navigation/IHeaderProps';

@inject('appStore') @observer
@observer
export default class Header extends React.Component<IHeaderProps, any>{

    constructor(props) {
        super(props);
        this.state = {
            appStore: props.appStore
        }
    }

    render() {
        return (
            <Toolbar block className="border-bottom p10">
                <Button outline right icon="moon-o">Toggle Nightmode</Button>
                <Button right icon="github" className="mr5"></Button>
            </Toolbar>
        )
    }
}