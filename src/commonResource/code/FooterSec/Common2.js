import React, { Component } from 'react'

export default class Common2 extends Component {
  render() {
    return (
      <ul>
          {/* <h3>{this.props.headerName}</h3> */}
          <li><a href="/#/">{this.props.linkName1}</a></li>
          <li><a href="/#/">{this.props.linkName2}</a></li>
          <li><a href="/#/">{this.props.linkName3}</a></li>
          <li><a href="/#/">{this.props.linkName4}</a></li>
          <li><a href="/#/">{this.props.linkName5}</a></li>
          <li><a href="/#/">{this.props.linkName6}</a></li>
          <li><a href="/#/">{this.props.linkName7}</a></li>
          <li><a href="/#/">{this.props.linkName8}</a></li>
          <li><a href="/#/">{this.props.linkName9}</a></li>
          <li><a href="/#/">{this.props.linkName10}</a></li>
          <li><a href="/#/">{this.props.linkName11}</a></li>
      </ul>
    )
  }
}
