import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Menu from "./Menu";

const Count = () => {
  let n = 0;
  const [getValue, setValue] = useState(n);
  
  const incNum = () => {
    return setValue(getValue+1)
  }
  
  const decNum = () => {
    if (getValue >= 1){
      return setValue(getValue-1)
    }
    else if (getValue === 0){
      return alert("You Reach The Limit Zero!!")
    }
  }
  
  return (
    <>
    <Menu />
     <div className="main_div">
       <div className="center_div">
         <h1 className="my-5">{getValue}</h1>
         <div className="row">
         <div className="col-sm-6 col-6">
           <button className="my_btn" onClick={incNum}><AddIcon /></button>
         </div>
         <div className="col-sm-6 col-5">
           <button className="my_btn" onClick={decNum}><DeleteForeverIcon /></button>
         </div>
         </div>
       </div>
     </div>
    </>
    );
}

export default Count;