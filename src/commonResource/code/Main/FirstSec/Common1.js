import React, { Component } from 'react'

export default class Common1 extends Component {
  render() {
    return (
        <div>
           
        {this.props.newAlert &&<div className="new-alert">
                {this.props.newAlert}
            </div>}  

            <div className="title-wraper bold black">
            {this.props.titleWraper} 
            </div> 

            <div className="description-wrapper black">
                {this.props.description}
            </div>

            <div className="price-wrapper grey">
                {this.props.price}
            </div>

            <div className="links-wrapper">
                <ul>
                    <li><a href={this.props.AB}>{this.props.AC}</a></li>
                    <li><a href={this.props.AD}>{this.props.AE}</a></li>
                </ul> 
            </div>

        </div>
    )
  }
}
