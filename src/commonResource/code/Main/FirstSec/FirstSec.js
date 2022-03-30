import React, { Component } from 'react'
import './FirstSec.css'
import Common1 from './Common1'

export default class FirstSec extends Component {
  render() {
    return (
      <div>

<section className="first-hightlight-wrapper">
        <div className="container">
			<Common1 newAlert="New" titleWraper="iPad Pro" 
			link="/Learn more/" AC="Learn more"AD="/Order/" AE="Order" />

			<div className="ipod-caption row">
                <div className="col-sm-12 col-md-6 text-md-right">iPad Pro available starting 3.25</div>
                <div className="col-sm-12 col-md-6 text-md-left">Magic Keyboard coming in May</div>
            </div> 
        </div>         
        </section>



        <section class="second-hightlight-wrapper">
			<div class="container">
				<Common1 newAlert="New" titleWraper="MacBook Air" 
				description="Twice the speed. Twice the storage."
				price="From $999."
				AB="/Learn more/" AC="Learn more"AD="/Buy/" AE="Buy" />
			</div>
		</section>


		<section class="third-hightlight-wrapper">
			<div class="container">
				<div class="title-wraper bold">
					iPhone 11 Pro 
				</div> 
				<div class="description-wrapper">
				Pro cameras. Pro display. Pro performance.
			   </div>

				<Common1 description
				price="From $24.95/mo. or $599 with trade‑in."
				AB="/Learn more/" AC="Learn more"AD="/Buy/" AE="Buy" />
				
			</div>
		</section>

      </div>
    )
  }
}
