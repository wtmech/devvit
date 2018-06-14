import React, { Component } from 'react'
import {
  DefaultButton
} from './GlobalStyles';

export default class Button extends Component {
  render() {
    return (
      <div>
        <DefaultButton 
          type={this.props.buttonType}
          height={this.props.height}
          margin={this.props.margin}
          background={this.props.background}
          color={this.props.color}>
          {this.props.title}
        </DefaultButton>
      </div>
    )
  }
}
