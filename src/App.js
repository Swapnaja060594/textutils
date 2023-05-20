
import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  
  const[mode, setMode] = useState('light');
  const[Btn, setBtn] = useState('Enable Dark Mode');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
   setAlert({
    msg: message,
    type: type
   })

   setTimeout(() => {
    setAlert(null);
   }, 1500);
  }

  const toggleMode = () => {
    console.log('toggle mode on');
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#23344d';
      document.title = 'TextUtils - Dark Mode';
      setBtn('Enable Light Mode');
      showAlert('Dark mode has been enabled', 'success');
    }
    else{
      setMode('light');
      setBtn('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils - Light Mode';
      showAlert('Light mode has been enabled', 'success');
    }
  }
  return (
    <>
    <Router>
      {/* <Navbar title="TextUtils" /> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} Btn={Btn}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <About/> */}
      <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/"  element={<TextForm heading="Enter the text to Analyse" showAlert={showAlert} mode={mode}/>}/>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
