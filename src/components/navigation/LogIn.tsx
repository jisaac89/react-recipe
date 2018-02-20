import * as React from 'react';
import { show } from '../../utils/lock';

export default class LogIn extends React.Component<any, any> {
  componentDidMount() {
    show('put-lock-here')
  }
  render() {
    return <div id={'put-lock-here'} />
  }
};