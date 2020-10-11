import React from "react";
import './Contacts.css';





const Contacts = (props) => {

return(
	<div className='Contacts-container'>
	   <h1 className='Contacts-title'> CONTACTS </h1>
	   <p className='Contacts-description'> We are based in <strong> Rotterdam </strong></p>
	   <p className='Contacts-description'> We provide our services in <strong> Netherlands and Europe </strong> </p>
	    <p className='Contacts-phone'> Call us for more information: <strong className='Contacts-strong'>   064  800  8983 / 063  922  2592 </strong>  </p>
	    <p className='Contacts-phone'> Email: <strong className='Contacts-strong'> vptransport@europe.com</strong></p>
	</div>
	)
}

export default Contacts