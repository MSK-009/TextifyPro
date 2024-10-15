import './App.css';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm.js';
import About from './Components/About.js';
import React, { useState } from 'react';
import Alert from './Components/Alert.js';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  const [btnColor, setBtnColor] = useState('primary')

  const toggleBtnColor=(color)=>{
    setBtnColor(color);

  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 3000);

  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled', 'success')
    }
    else {
      setMode('dark')
      if (btnColor === 'primary'){
        document.body.style.backgroundColor = '#004797';
      }
      else if (btnColor === 'danger'){
        document.body.style.backgroundColor = 'rgb(62 0 3)';
      }
      else {
        document.body.style.backgroundColor = '#007387';
      }
      showAlert('Dark Mode has been enabled', 'success')
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils2" about="About TextUtils"/> */}
      <BrowserRouter>
      <Navbar mode={mode} toggleMode={toggleMode} toggleBtnColor={toggleBtnColor} btnColor={btnColor} />
      <Alert alert={alert}/>
      <div className='container my-3'>
      <Routes>
            <Route path="/about" element={<About mode={mode} btnColor={btnColor}/>}/>
            <Route path="/" element={<TextForm heading="Enter Text" mode={mode} showAlert={showAlert} btnColor={btnColor}/>} />
          </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}
export default App;
