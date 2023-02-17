import React from 'react';
import './App.css';
import Button from './components/Button';
import { ButtonType } from './components/Button/Button';
import Title from './components/Title';
import UserName from './components/UserName';
import Tabs from './components/Tabs';
import { CloseIcon,OpenedMenu } from './assets/icons';


  
const App=()=> {
  return (
    
    <div>
        <Button title= {"Primary"} type={ButtonType.Primary} onClick={()=>{}}/>
        <Button title= {"Secondary"} type={ButtonType.Secondary} onClick={()=>{}}/>
        <Button title= {"Error"} type={ButtonType.Error} onClick={()=>{}}/>
        <Title title={"Blog"}/>
        <UserName userName={"Veronika Volkova"}/>
    <Tabs/>
    <div style={{background:"black"}}>
      <CloseIcon/>
      <OpenedMenu/>
    </div>
    </div>
  );
}

export default App;
