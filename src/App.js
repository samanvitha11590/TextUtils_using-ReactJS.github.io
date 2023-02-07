import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
   const [mode,setMode]=useState('light');
   const [alert,setAlert]=useState(null);
  
   const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

   const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      // document.title='TextUtils-Dark Mode';
      
      // setInterval(()=>{
      //   document.title='TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(()=>{
      //   document.title='Install TextUtils now';
      // }, 1500);
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Dark mode has been enabled","success");
      // document.title='TextUtils-Light Mode';
    }
   }
  return (
    <>
    {/* <Router> */}
    <Navbar title="SamTextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    {/* alert is set below navbar */}
    <Alert alert={alert}/> 
    <div className="container my-3">
          {/* <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Try TextUtils - Edit your text here"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes> */}
          <TextForm heading="Try TextUtils - Edit your text here"  mode={mode} showAlert={showAlert} /> 
    </div>
    {/* </Router> */}
    </>
  );
}
export default App;



{/* <About/>
<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} /> */}
