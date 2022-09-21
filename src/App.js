import React, {useState} from 'react';
import About from './component/about';
import Navbar from './component/navbar';
import Text from './component/text'
import Contact from './component/contact';
import Packages from './component/packages';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Facilities from './component/facilities';



function App() {
  const [ModeText, setModeText]=useState('Enable Dark Mode');
  const [Mode, setMode]= useState('light')

  const togglemode=()=>{
    if (Mode!=='dark'){
      setMode('dark');
      setModeText('Enable Light Mode');
      document.body.style.backgroundColor='black';
      document.body.style.color='white'
    }
    else{
      setMode('light');
      setModeText('Enable Dark Mode');
      document.body.style.backgroundColor='white';
      document.body.style.color='black'
    }
  }
  return (
    <div className="App">

      <Router>
        <Navbar title={'The gym'} HomeText={'Home'} ContactText={'Contact'} PackagesText={'Packages'} FacilitiesText={'Facilities'} AboutText={'About'} modetext={ModeText} mode={Mode} togglemode={togglemode}/>

        <Routes>
          <Route exact path='/' element={<Text />} />

          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route exact path='/packages' element={<Packages/>} />
          <Route exact path='/facilities' element={<Facilities/>} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
