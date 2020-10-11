import React, { Component } from 'react';
import TopBar from './Components/TopBar';
import Cover from './Components/Cover';
import About from './Components/About';
import Services from './Components/Services';
import Contacts from './Components/Contacts';
import Form from './Components/Form';
import Bottom from './Components/Bottom';
import Icon from './Navbar/Icon'
import Links from './Navbar/Links'
import './App.css';



class App extends Component {
  state={
    shownav: false,
    }

  doshow =()=>{                                
    if(this.state.shownav === true){
   this.setState({shownav:false})
  } else { this.setState({shownav:true})  }
  }

doScrollAbout=()=>{
  if(window.matchMedia("(max-width: 700px)").matches){window.scrollTo({top:500,behavior:'smooth'});this.setState({shownav:false}) }
  else if(window.matchMedia("(max-width: 1000px)").matches){window.scrollTo({top:700,behavior:'smooth'}) }
   else if(window.matchMedia("(max-width: 1300px)").matches){window.scrollTo({top:800,behavior:'smooth'}) }
    else {window.scrollTo({top:800,behavior:'smooth'});this.setState({shownav:false}) }
}
doScrollServices=()=>{
  if(window.matchMedia("(max-width: 700px)").matches){window.scrollTo({top:810,behavior:'smooth'});this.setState({shownav:false}) }
  else if(window.matchMedia("(max-width: 1000px)").matches){window.scrollTo({top:1250,behavior:'smooth'}) }
   else if(window.matchMedia("(max-width: 1300px)").matches){window.scrollTo({top:1250,behavior:'smooth'})}
    else {window.scrollTo({top:1350,behavior:'smooth'});this.setState({shownav:false}) }
}
doScrollContacts=()=>{
  if(window.matchMedia("(max-width: 700px)").matches){window.scrollTo({top:3200,behavior:'smooth'});this.setState({shownav:false}) }
  else if(window.matchMedia("(max-width: 1000px)").matches){window.scrollTo({top:2700,behavior:'smooth'}) }
   else if(window.matchMedia("(max-width: 1300px)").matches){window.scrollTo({top:2450,behavior:'smooth'}) }
    else {window.scrollTo({top:2200,behavior:'smooth'});this.setState({shownav:false}) }
}
doScrollForm=()=>{
  if(window.matchMedia("(max-width: 700px)").matches){window.scrollTo({top:3730,behavior:'smooth'});this.setState({shownav:false}) }
  else if(window.matchMedia("(max-width: 1000px)").matches){window.scrollTo({top:3300,behavior:'smooth'}) }
   else if(window.matchMedia("(max-width: 1300px)").matches){window.scrollTo({top:3100,behavior:'smooth'}) }
    else {window.scrollTo({top:2700,behavior:'smooth'});this.setState({shownav:false}) }
}

render(){
return(
<div>
<TopBar/>
 <nav className='navbar'>    
 <Icon   click={this.doshow}/>            
 <Links  passState={this.state.shownav} doScrollAbout={this.doScrollAbout}
 doScrollServices={this.doScrollServices} doScrollContacts={this.doScrollContacts}/>
 </nav>
<Cover doScrollForm={this.doScrollForm}/>
<About/>
<Services/>
<Contacts/>
<Form />
<Bottom/>

</div>
);
}
}

export default App;