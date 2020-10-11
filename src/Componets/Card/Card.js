import React from "react";
import './Card.css';



const Card = (props) => {
return(
	<div className='Card-container'>
	   <img className='Card-img' src={props.photo} alt='img' />
       <p className='Card-title'> {props.title} </p>
       <p className='Card-text'> {props.description} </p>
	   
	</div>
	)
}

export default Card