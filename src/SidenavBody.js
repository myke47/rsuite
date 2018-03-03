// @flow

import * as React from 'react';
import classNames from 'classnames';
import { defaultProps } from './utils';

type Props = {
  classPrefix?: string,
  className?: string
};

class SidenavBody extends React.Component<Props> {
  render() {
    const { classPrefix, className, ...props } = this.props;

    const classes = classNames(classPrefix, className);

    return <div {...props} className={classes} />;
  }
}

export default defaultProps({
  classPrefix: 'sidenav-body'
})(SidenavBody);
