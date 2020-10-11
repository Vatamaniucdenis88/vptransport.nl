import React from "react";
import './Cover.css';
import cover from '.././assets/cover.png';
import logo from '.././assets/logo.png';

const Cover = (props) => {
return(
<div className='Cover'>
	<div className='Cover-container'>
    </div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='Cover-wave'>
  <path xmlns="http://www.w3.org/2000/svg" fill="#242858" fill-opacity="1" d="M 0 256 L 288 224 L 576 160 L 864 256 L 1152 224 L 1440 224 L 1440 320 L 1152 320 L 864 320 L 576 320 L 288 320 L 0 320 Z" />
</svg>
        
        <div className='Cover-container-top'>
             <div className='Cover-textcontainer'>
           <h1 className='Cover-logo-text'> Making Your Move </h1>
           <h1 className='Cover-logo-text'> Quick & Easy </h1>
           <button className='Cover-button' onClick={props.doScrollForm}> Free Quote </button>
             </div>
           <img src={cover} alt='cover' className='Cover-img'/>
        </div>
</div>
	)
}

export default Cover

       