import React, { Component } from 'react';
import { DefaultInput } from './GlobalStyles';

export default class Input extends Component {
  render() {
    return (
      <div>
        <DefaultInput 
          type={this.props.type} 
          value={this.props.value}
          width={this.props.width} 
          height={this.props.height} 
        />
      </div>
    )
  }
}

