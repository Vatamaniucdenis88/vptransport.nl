import React from "react";
import './Services.css';
import Card from './Card/Card';
import {servicelist} from './Card/servicelist';



const Services = (props) => {

	const mapCard = servicelist.map((user,i)=>{
          return <Card key={user[i]} title={servicelist[i].title} description={servicelist[i].description} photo={servicelist[i].photo} /> 
     })
return(
	<div className='Services-container'>
	   <h1 className='Services-title'> SERVICES WE PROVIDE </h1> 
	    <div className='Services-cards'> 
	     {mapCard}
	    </div>
	</div>
	)
}

export default Services