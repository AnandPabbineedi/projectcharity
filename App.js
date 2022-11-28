import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './components/About';
import Causes from './components/Causes';
import Contact from './components/Contact';
import Donate from './components/Donate';
import Home from './components/Home';
import Maps from './components/Maps';
import Music from './components/Music';
import News from './components/News';
import Volunteer from './components/Volunteer';
import Error404 from './Error404';


function App() {
  
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/about' element={<About />} ></Route>
          <Route path='/causes' element={<Causes />} />
          <Route path='/volunteer' element={<Volunteer />} />
          <Route path='/news' element={<News />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/donate' element={<Donate />}/>
          <Route path='/music' element={<Music />}/>
          <Route path='/*' element={<Error404 />}/>
          <Route path='/maps' element={<Maps />}/>
        </Routes>
      </BrowserRouter>

     </div>
  );
}

export default App;