import './App.css';
import { Route, Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import {NavBarVPES} from './components/Navbar/Navbar.js';
import Footer from './components/Footer/footer';
import ScrollToTop from "./components/scroll";

import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import OurServices from './Pages/OurServices';
import { ContactUs } from './Pages/ContactUs';
import Gurukul from './Pages/Gurukul';
import StrengthPlant from './Pages/Strength-Plant';
import StrengthProcess from './Pages/Strength-Process'
import TractionPower from './Pages/TractionPower';
import StrengthPeople from './Pages/Strength-People';
import Repair from './Pages/Repair';
import POH from './Pages/POH';
import EPC from './Pages/EPC'
import AutoTransfromerPage from './Pages/AutoTransfromer';
import SpecialTransfromer from './Pages/SpecialTransfromer';
import ChallengingRecords from './Pages/ChallengingRecords';
import OurCredentials from './Pages/OurCredentials';

function App() {
  return (
    <>
    <HashRouter>
    <ScrollToTop/>
    <NavBarVPES/>
    
    <Routes>
     
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/About' element={<About/>}/>
      <Route exact path='/Products' element={<Products/>} />
      <Route exact path='/OurServices' element={<OurServices/>}/>
      <Route exact path='/ContactUs' element={<ContactUs/>}/>
      <Route exact path='/Gurukul' element={<Gurukul/>}/>
      <Route exact path='/StrengthPlant' element={<StrengthPlant/>}/>
      <Route exact path='/StrengthProcess' element={<StrengthProcess/>}/>
      <Route exact path='/TractionPower' element={<TractionPower/>}/>
      <Route exact path='/AutoTransformer' element={<AutoTransfromerPage/>}/>
      <Route exact path='/Special' element={<SpecialTransfromer/>}/>
      <Route exact path='/ChallengingRecords' element={<ChallengingRecords/>}/>
      <Route exact path='/OurCredentials' element={<OurCredentials/>}/>
      <Route exact path='/StrengthPeople' element={<StrengthPeople/>}/>
      <Route exact path='/Repair' element={<Repair/>}/>
      <Route exact path='/POH' element={<POH/>}/>
      <Route exact path='/EPC' element={<EPC/>}/>


    </Routes>
    <Footer/>
    </HashRouter>
    
    </>
    
  );
}

export default App;
