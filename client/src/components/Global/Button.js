import React, { Component, Fragment } from 'react'
import {
  DefaultButton
} from './GlobalStyles';

export default class Button extends Component {
  render() {
    return (
      <Fragment>
        <DefaultButton 
          hoverBackground={this.props.hoverBackground}
          type={this.props.buttonType}
          height={this.props.height}
          width={this.props.width}
          margin={this.props.margin}
          background={this.props.background}
          color={this.props.color}>
          {this.props.title}
        </DefaultButton>
      </Fragment>
    )
  }
}
