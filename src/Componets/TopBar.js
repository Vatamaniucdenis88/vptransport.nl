import React from "react";
import './TopBar.css';
import logo from '.././assets/logo.png';

const TopBar = (props) => {
return(
	<div className='TopBar-container'>
        <img src={logo} alt='logo' className='TopBar-img'/>
        <h1 className='TopBar-title'> CONTACT US:<strong className='TopBar-strong'> 064 800 8983 </strong> </h1>
	</div>
	)
}

export default TopBar