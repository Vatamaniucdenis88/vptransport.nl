import React from 'react';
import './Links.css';

function Links(props) {
	let passState = props.passState;    
	let classChange = 'Links';
	if (passState === false) {         
		classChange = 'Linksclose'
	}
	
		
  return (
 <div className='nav-main-container'>
    <div className={classChange}>
      <ul className='nav-links'>
        <li className='nav-li-a' onClick={props.doScrollAbout}> ABOUT </li>
        <li className='nav-li-a' onClick={props.doScrollServices}> SERVICES </li>
        <li className='nav-li-a' onClick={props.doScrollContacts}> CONTACTS </li>
      </ul>
    </div>
  </div>
  );
}

export default Links;