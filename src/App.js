import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react'
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)


  const showAlert =(message, type)=>{
    setAlert({
      msg : message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


  const toggleMode = ()=>{
    if(mode == 'light' )
    {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode has been enabled', "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', "success");

    }
  }

  return (
   <>
   <Router>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    {/* <Navbar />  */}
    <Alert alert={alert}/>


    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={<About />}>
            
          </Route>
          <Route extact path="/" element={<TextForm heading = "Enter the text to analyze"/>} />

    </Routes>
 
    </div>

   </Router>

   </>
  );
}

export default App;
