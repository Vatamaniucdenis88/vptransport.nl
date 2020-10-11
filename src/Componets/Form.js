import React from 'react';
import Airform from 'react-airform'
import './Form.css';


const Form = () => {


return(

<div className='Form-container'>
<h1 className='Form-container-title'> REQUEST A QUOTE </h1>
<Airform email="vptransport@europe.com" className='Form-container-Form' >
      
          <label> Name </label>
          <input name="name" type='text'  className='Form-email-input'/>
      
      
          <label> Phone </label>
          <input   name="phone" type='text'  className='Form-email-input'/>
      
      
          <label> Email </label>
          <input name="email" type='text'  className='Form-email-input'/>
      

      <label> Message </label>
      <textarea name="message"  rows="5"  className='Form-message-input'> </textarea>

      
<button className='Form-button-input'> Send </button>
</Airform>
</div>
);
}


export default Form;