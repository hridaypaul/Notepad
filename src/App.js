import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { Alert } from './Components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route 
} from "react-router-dom";
  
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#0e0225'
      document.body.style.color = 'White'
      showAlert("Dark mode has been enabled", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'White'
      document.body.style.color = 'black'
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
   <>
        <BrowserRouter>
        <Navbar title="Hriday" about="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
         <Routes> 
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text here" mode={mode}/>}>  
          </Route>
          <Route exact path="/about" element={<About mode={mode}/>}> 
          </Route> 
         </Routes>  
        </div>
        </BrowserRouter>
    </>
 
  );

   
 
}

export default App;
