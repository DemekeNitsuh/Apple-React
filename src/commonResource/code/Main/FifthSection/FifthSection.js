import React, {Component} from 'react';
import './FifthSection.css'
import tv from '../../../images/icons/apple-tv-logo.png'
import banker from '../../../images/home/banker.png'
import series5 from '../../../images/icons/watch-series5-logo.png'

class FifthSection extends Component {
  render(){
	return <div>
	<section className="fifth-heghlight-wrapper">
	  <div className="container-fluid">
		  <div className="row">
			  <div className="left-side-wrapper col-sm-12 col-md-6">
				  <div className="left-side-container">
					  <div className="top-logo-wrapper">
						  <div className="logo-wrapper">
							  <img src={tv} alt="" />
						  </div>
					  </div>

					  <div className="tvshow-logo-wraper">
						  <img src={banker} alt="" />
					  </div>

					  <div className="watch-more-wrapper">
						  <a href="/Apple TV/">Watch now on the Apple TV App</a>
					  </div>
				  </div>
			  </div>
			  <div className="right-side-wrapper col-sm-12 col-md-6">
				  <div className="right-side-container">
					  <div className="top-logo-wrapper">
						  <div className="logo-wrapper">
							  <img src={series5} alt="" />
						  </div>
					  </div>
					  <div className="description-wraper">
						  With the Always-On Retina display.<br/>
						  You’ve never seen a watch like this.
					  </div>
					  <div className="links-wrapper">
						  <ul>
							  <li><a href="/Learn more/">Learn more</a></li>
							  <li><a href="/Buy/">Buy</a></li>
						  </ul> 
					  </div>
				  </div>
			  </div>					
		  </div>
	  </div> 
  </section>
</div>;
  }
}

export default FifthSection;
