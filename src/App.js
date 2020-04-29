import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './Components/UserInput/UserInput';
import UserOutput from './Components/UserOutput/UserOutput';
import UserInputElement from './Components/Assignment2/UserInputElement';
import ValidationComp from './Components/Assignment2/ValdiationComp';
import CharComponent from './Components/Assignment2/CharComponent';
import Blog from './Components/src/containers/Blog/Blog';

import {BrowserRouter} from 'react-router-dom';

function App() {
  const [userData , setUserData] = useState('Enter data');
  const [userLength, setLength] = useState(0);
  const [charArr, setCharArr] = useState([]);
  const [userInputtedData, setDataForInp] = useState('')

  const changeHandler = (event) => {
    setUserData(event.target.value)
  }

  const changeHandlerForInput = (event) => {
    let obj = event.target.value;
    setLength(obj.length);
    setDataForInp(obj);
    setCharArr(obj.split(''));
  }

  const removeCharHandler = (event,index) => {
    const newArr = charArr.slice(0);
    newArr.splice(index,1);
    setCharArr(newArr);
    setLength(newArr.length);
    setDataForInp(newArr.join(''));
  }

  const ListGenerate =  charArr.map((characterDisp,index) => {
                  return <CharComponent  
                          key={index+characterDisp} 
                          enteredChar={characterDisp} 
                          removeCharHandler={(event)=>removeCharHandler(event,index)}/>
                  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <UserInput 
      handler = {changeHandler} 
      initial = {userData}
      />
      <UserOutput 
       userData={userData}
       />
       <UserOutput 
       userData={userData}
       />

    <UserInputElement 
      changeHandlerForInput = {changeHandlerForInput}
      dataLength = {userLength} 
      userInputtedData = {userInputtedData}
      />
      <ValidationComp dataLength = {userLength} />
       {ListGenerate}
       <Blog />
    </div>
  );
}

export default App;
