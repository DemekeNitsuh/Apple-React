import React, {Component} from 'react';
import './Header.css'
import logo from '../../images/icons/logo-sm.png'
import search from '../../images/icons/search-icon-sm.png'
import cart from '../../images/icons/cart-sm.png'
import NavLink from './NavLink';
{/* <Link to="/">Home</Link> */}
// import { Link } from "react-router-dom";

class Header extends Component {
  render() {
	return <div>
	<div className="nav-wrapper fixed-top">
		<div className="container">
			<nav className="navbar navbar-toggleable-sm navbar-expand-md">
			    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
			        ☰
			    </button>
			    <a className="navbar-brand mx-auto" href="/"><img src={logo} alt=""/></a>

			    <div className="navbar-collapse collapse">
			        <ul className="navbar-nav nav-justified w-100 nav-fill">
						<NavLink linkName="Mac"linkUrl="/mac"/>
						<NavLink linkName="iphone"linkUrl="/iphone"/>
						<NavLink linkName="ipad"linkUrl="/ipad"/>
						<NavLink linkName="watch"linkUrl="/watch"/>
						<NavLink linkName="tv"linkUrl="/tv"/>
						<NavLink linkName="Music"linkUrl="/Music"/>
						<NavLink linkName="Support"linkUrl="/Support"/>
						<li className="nav-item" ><a className="nav-link js-scroll-trigger" href="/search"><img src={search} alt=""/></a></li>
						<li className="nav-item"><a  className="nav-link js-scroll-trigger" href="/cart"><img src={cart} alt=""/></a></li>
			        </ul>
			    </div>
			</nav>
		</div>
	</div>      
  </div>;
  }
}

export default Header;
