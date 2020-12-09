import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';       
import './App.css';

const App =() =>{
  const[inputList,setInputList]  = useState("");
  const[items,setItems]  = useState([]);
const itemEvent = (event)=>{
  inputList(event.target.value);
}

const UpdateItems = ()=>{
  setInputList(inputList)

}

return(
  <>
<div className="main_div">
  <div className="center_div">
    <br />
    <h1>Todo list App</h1>
    <br />
  
    <input type="text" placeholder="Add aItems" onChannge={itemEvent}/>
    <Button><AddIcon /></Button>
    <ol>
      <li>{setInputList}</li>
    </ol>
  </div>
</div>

  </>
);
}


export default App;
