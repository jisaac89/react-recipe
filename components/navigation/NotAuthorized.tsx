import * as React from 'react';
import Link from 'next/link';

export default class NotAuthorized extends React.Component {
  render() {
    return (
      <div>
        You're not authenticated yet. <Link href='/auth/sign-in'><a>Sign In</a></Link>
      </div>
    )
  }
}
