import React, { Component, Fragment } from 'react';
import { DefaultInput } from './GlobalStyles';

export default class Input extends Component {
  render() {
    return (
      <Fragment>
        <DefaultInput
          name={this.props.name} 
          type={this.props.type} 
          placeholder={this.props.placeholder || ''}
          value={this.props.value || ''}
          width={this.props.width} 
          height={this.props.height} 
          margin={this.props.margin}
          border={this.props.border}
          onChange={this.props.onChange}
        />
      </Fragment>
    )
  }
}

