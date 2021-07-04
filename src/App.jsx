import React, { useState } from 'react';
import Heading from './Heading';
import Params from './Params';
import List from './List';
import Card from './Card';
import Menu from "./Menu";
import Sdata from './Sdata';


function App(){
  
  // Digital Time Clock Starts Here
  let time = new Date().toLocaleTimeString();
  let [curTime, updTime] = useState(time);
  
  setInterval(() => {
    time = new Date().toLocaleTimeString();
    updTime(time);
  }, 1000);
  
  // Digital Time Clock ends Here

  // Button BgColor Change Starts Here
  let color = "purple";
  let [curColor, updColor] = useState(color);
  let [cName, sName] = useState("Click Me");
  const bgColor = () => {
    updColor("cyan");
    sName('Ouch :/');
  };
  const bgBackColor = () => {
    updColor("purple");
    sName('Ayyo :(');
  };
  // Button BgColor Change Ends Here

  let [name, setName] = useState("");
  let [getName, updName] = useState("");
  
  let [age, setAge] = useState("");
  let [getAge, updAge] = useState("");

  const inputEventName = (e) => {
    setName(e.target.value);
  }
  
  const inputEventAge = (e) => {
    setAge(e.target.value);
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    updName(name);
    updAge(age);
  }
  return (
  <>
  <Menu />
   <div className='text-center' style={{backgroundColor: curColor}}>
   
     {/* Digital Clock Starts Here*/}
     <h4 className='alert alert-primary text-center my-3'><p>Digital Time Clock</p><strong style={{color: 'red'}}>{curTime}</strong></h4>
     
     <div className="d-flex justify-content-center my-2">
       <button className="btn btn-danger btn-lg text-center" style={{color: 'white'}} onClick={bgColor} onDoubleClick={bgBackColor}>{cName}</button>
     </div>
     {/* Digital Clock Ends Here */}
     
     {/* Input Form Starts Here */}
     <div className="text-center my-2">
       <h3 style={{fontSize: '30px', fontFamily: 'cursive', fontWeight: 'bold', color: 'yellow'}}>Hello {getName} {getAge}</h3>
       <form onSubmit={onSubmit}>
         <input type="text" className="form-control h1 border border-dark" placeholder="Enter Your Name..." onChange={inputEventName} value={name}/>
         <input type="text" className="form-control h1 border border-dark" placeholder="Enter Your Age..." onChange={inputEventAge} value={age}/>
         <button type="submit" className="btn btn-warning btn-lg text-center">Submit</button>
       </form>
     </div>
     {/* Input Form Ends Here */}
     
     <Heading />
     <Params />
     <List />
     
     {/* Cards Component Starts Here*/}
     {
       Sdata.map((curr_val) => {
         return (
         <Card 
         src={curr_val.src} 
         title={curr_val.title} 
         content={curr_val.content} 
         />
         )
       })
     }
     {/*Card Component Ends Here*/}
   </div>
  </>
 );
}

export default App;