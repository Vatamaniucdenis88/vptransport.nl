import React from 'react';
import Line from './Line';
import './Icon.css';

function Icon(props) {
  return (
    <div className="Icon" onClick={props.click}>
     <Line/>   
     <Line/>
     <Line/>
    </div>
  );
}

export default Icon;
