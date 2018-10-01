import React, { Component } from 'react';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

class TabBarIcon extends Component {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={26}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}

export default TabBarIcon;