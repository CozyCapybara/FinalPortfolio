import './App.css';
import { NavbarItem } from './components/NavbarItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import {Home} from './pages/Home';
import {About} from './pages/About';
import {ResponsiveRedesign} from './pages/ResponsiveRedesign';
import {IterativeDesign} from './pages/IterativeDesign';
import {ABTesting} from './pages/ABTesting';
import { Header } from './components/Header'



function App() {
  return (
    <div id='root'>
      <div className="App">
        <NavbarItem />
        <Header />
      </div>



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/ResponsiveRedesign" element={<ResponsiveRedesign />} />
        <Route path="/IterativeDesign" element={<IterativeDesign />} />
        <Route path="/ABTesting" element={<ABTesting/>} />
      </Routes>


      

    </div>
    

    
  );
}

export default App;
