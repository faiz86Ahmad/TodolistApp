
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';       
import ListCom from './ListCom';

const TodoList =() =>{
  const[item, setItem]  = useState("");
  const[newItem, setNewItem] = useState([]);
const itemEvent = (event)=>{
  setItem(event.target.value);
};

const listOfItem = ()=>{
    setNewItem((prevValue)=>{
        return [...prevValue,item];

    });
    setItem("");
  

};

return(
  <>
<div className="main_div">
  <div className="center_div">
    <br/>
    <h1>Todo list App</h1>
    <br/>
  
    <input
     type="text"
     value={item} 
     placeholder="Add a Items" 
     onChange={itemEvent}
     />
     <Button className="newbtn" onClick={listOfItem}><AddIcon /></Button>
    <ol>
    
          {newItem.map((val,index)=>{
              return <ListCom  key={index}text={val} />;

          })}
        
      
    </ol>
  </div>
</div>

  </>
);
}


export default TodoList;
