import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Blog from './Component/Blog';
import Portfolio from './Component/Portfolio';
import Navbar from './Component/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='about' element= { <About/>}/>
          <Route path='contact' element={ <Contact/>}/>
          <Route path='blog' element={ <Blog/>}/>
          <Route path='Portfolio' element={ <Portfolio/>}/>          
        </Routes>

      </Router>
     
     
      
     
     
    </div>
  );
}

export default App;
