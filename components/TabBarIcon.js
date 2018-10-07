import React, { Component } from 'react';
import { Icon } from 'expo';

import { tabIconSelected, tabIconDefault } from '../constants/Colors';

class TabBarIcon extends Component {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={26}
        color={this.props.focused ? tabIconSelected : tabIconDefault}
      />
    );
  }
}

export default TabBarIcon;